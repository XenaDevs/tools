import { useState } from "react";
import { InputArea, InputTextArea, ToolTemplate } from "../../../components";
import { toolMetaData } from "./tool-metadata";

const JsonPathTester = () => {
  const [_dataInput, setDataInput] = useState("");
  const [jsonResult, setJsonResult] = useState("");

  const inputJson = (input: string) => {
    try {
      const parsedJson = JSON.parse(input);
      setDataInput(parsedJson);
    } catch (err) {}
  };

  const testJson = (input: string) => {
    try {
      setJsonResult(eval("dataInput." + input));
    } catch (err) {
      setJsonResult("Invalid JSON");
    }
  };

  const tool = (
    <>
      {" "}
      <InputTextArea
        placeHolder={"Paste data here..."}
        onChangeFunction={inputJson}
      />
      <InputArea
        onChangeFunction={testJson}
        placeHolder={"test.files[0].filename"}
      />
      <p className="mt-12">{JSON.stringify(jsonResult)}</p>
    </>
  );

  return <ToolTemplate tool={tool} metadata={toolMetaData} />;
};

export default JsonPathTester;
