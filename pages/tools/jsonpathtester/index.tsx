import Head from "next/head";
import { useState } from "react";
import { InputArea, InputTextArea } from "../../../components";
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

  return (
    <main className="px-10 md:px-20 lg:px-30 max-w-5xl mx-auto">
      <Head>
        <title>{toolMetaData.label}</title>
        <meta name="keywords" content={toolMetaData.keywords.join(",")} />
        <meta name="description" content={toolMetaData.shortDesc} />
      </Head>

      <section className="min-h-screen py-20">
        <h2 className="text-xl mt-10">Test your JSON path</h2>
        <div className="flex flex-col items-center">
          <InputTextArea
            placeHolder={"Paste data here..."}
            onChangeFunction={inputJson}
          />
          <InputArea
            onChangeFunction={testJson}
            placeHolder={"test.files[0].filename"}
          />
          <p className="mt-12">{JSON.stringify(jsonResult)}</p>
        </div>
      </section>
    </main>
  );
};

export default JsonPathTester;
