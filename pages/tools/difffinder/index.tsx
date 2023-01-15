import { Head } from "components/Head/Head";
import { useState } from "react";
import { Button, InputTextArea } from "../../../components";
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

  return (
    <main className="px-10 md:px-20 lg:px-30 max-w-6xl mx-auto">
      <Head tool={toolMetaData} />

      <section className="min-h-screen py-10">
        <h1 className="text-xl mt-10">
          Compare two sets of inputs and find all differences
        </h1>
        <div className="flex flex-col max-w-5xl mt-10 gap-10 lg:flex-row justify-center">
          <div className="w-full">
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

            <InputTextArea
              placeHolder={"Paste data here..."}
              onChangeFunction={setLeftInput}
            />
          </div>
          <div className="w-full">
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
            <InputTextArea
              placeHolder={"Paste data here..."}
              onChangeFunction={setRightInput}
            />
          </div>
        </div>

        <Button
          onClick={() => checkForDiffs()}
          disabled={leftDataInput.length === 0 || rightDataInput.length === 0}
          text="Compare inputs"
        />
      </section>
    </main>
  );
};

export default Difffinder;
