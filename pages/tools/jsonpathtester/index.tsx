import Head from "next/head";
import { useState } from "react";
import {
  CodeBox,
  InputArea,
  InputTextArea,
} from "../../../components";

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

  return (
    <div className="container">
      <Head>
        <title>Tools - Json path tester</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <InputTextArea
          placeHolder={"Paste data here..."}
          onChangeFunction={inputJson}
        />

        <InputArea
          onChangeFunction={testJson}
          placeHolder={"test.files[0].filename"}
        />

        <CodeBox code={JSON.stringify(jsonResult)} />
      </main>
    </div>
  );
};

export default JsonPathTester;
