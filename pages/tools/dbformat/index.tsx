import { useState } from "react";
import { InputTextArea, Button, ToolTemplate } from "../../../components";
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

  const tool = (
    <>
      <h3 className="text-xl">Example Input:</h3>
      <p>
        1 <br />
        2 <br />
        3 <br />
        4 <br />5
      </p>

      <h3 className="text-xl">Example Output:</h3>
      <p>
        in ( <br />
        &apos;1&apos;, <br />
        &apos;2&apos;, <br />
        &apos;3&apos;, <br />
        &apos;4&apos;, <br />
        &apos;5&apos;)
      </p>

      <InputTextArea
        placeHolder={"Paste data here..."}
        onChangeFunction={setDataInput}
      />

      <Button
        onClick={() => translateToDbList()}
        disabled={dataInput.length === 0}
        text="Format & Copy"
      />
    </>
  );

  return <ToolTemplate tool={tool} metadata={toolMetaData} />;
};

export default DbFormat;
