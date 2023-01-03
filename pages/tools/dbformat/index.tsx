import { Head } from "components/Head/Head";
import { useState } from "react";
import { InputTextArea, Button } from "../../../components";
import { toolMetaData } from "./tool-metadata";

const DbFormat = () => {
  const [dataInput, setDataInput] = useState("");

  const translateToDbList = () => {
    const result =
      "in (\n" +
      dataInput
        .split("\n")
        .filter((r) => r)
        .map(
          (r, i) =>
            `'${r}'` +
            (i === dataInput.split("\n").filter((r) => r).length - 1 ? "" : ",")
        )
        .join("\n") +
      ")";
    navigator.clipboard.writeText(result);
  };
  return (
    <main className="px-10 md:px-20 lg:px-30 max-w-5xl mx-auto">
      <Head tool={toolMetaData} />

      <section className="min-h-screen py-10">
        <h2 className="text-xl">Database list formatter</h2>
        <div className="flex justify-center gap-24 lg:gap-36 mt-8">
          <div>
            <h3 className="text-xl">Example Input:</h3>
            <p>
              1 <br />
              2 <br />
              3 <br />
              4 <br />5
            </p>
          </div>
          <div>
            <h3 className="text-xl">Example Output:</h3>
            <p>
              in ( <br />
              &apos;1&apos;, <br />
              &apos;2&apos;, <br />
              &apos;3&apos;, <br />
              &apos;4&apos;, <br />
              &apos;5&apos;)
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <InputTextArea
            placeHolder={"Paste data here..."}
            onChangeFunction={setDataInput}
          />

          <Button
            onClick={() => translateToDbList()}
            disabled={dataInput.length === 0}
            text="Format & Copy"
          />
        </div>
      </section>
    </main>
  );
};

export default DbFormat;
