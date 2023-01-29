import { useState } from "react";
import { Button, InputTextArea, ToolTemplate } from "../../../components";
import { toolMetaData } from "./tool-metadata";

const Difffinder = () => {
  const [rightDataInput, setRightInput] = useState("");
  const [leftDataInput, setLeftInput] = useState("");
  const [missingValues, setMissingValues] = useState<string[][]>([]);

  const checkForDiffs = () => {
    setMissingValues([]);
    const arr1 = rightDataInput.split("\n");
    const arr2 = leftDataInput.split("\n");
    setMissingValues([
      arr1.filter((x) => !arr2.includes(x)),
      arr2.filter((x) => !arr1.includes(x)),
    ]);
  };

  const tool = (
    <>
      <div className="flex flex-col max-w-5xl mt-10 gap-10 lg:flex-row justify-center">
        <div className="w-full">
          <InputTextArea
            placeHolder={"Paste data here..."}
            onChangeFunction={setLeftInput}
          />

          {missingValues[0]?.length > 0 && (
            <>
              <p className="text-xl font-medium mb-3">
                The below list is missing these values:
              </p>
              <p>
                {missingValues[0].map((v, i) => (
                  <span key={i}>{v}</span>
                ))}
              </p>
            </>
          )}
        </div>

        <div className="w-full">
          <InputTextArea
            placeHolder={"Paste data here..."}
            onChangeFunction={setRightInput}
          />

          {missingValues[1]?.length > 0 && (
            <>
              <p className="text-xl font-medium mb-3">
                The below list is missing these values:
              </p>
              <p>
                {missingValues[1].map((v, i) => (
                  <span key={i}>{v}</span>
                ))}
              </p>
            </>
          )}
        </div>
      </div>
      <Button
        onClick={() => checkForDiffs()}
        disabled={leftDataInput.length === 0 || rightDataInput.length === 0}
        text="Compare inputs"
      />
    </>
  );

  return <ToolTemplate tool={tool} metadata={toolMetaData} />;
};

export default Difffinder;
