import Head from "next/head";
import { useState } from "react";
import { Button, CodeBox, InputTextArea } from "../../../components";

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
    <div className="container">
      <Head>
        <title>Diff finder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <div style={{ marginLeft: "10%" }}>
          <div>
            <InputTextArea
              placeHolder={"Paste data here..."}
              onChangeFunction={setLeftInput}
              width={300}
            />
            {missingValues[0]?.length > 0 && (
              <>
                <p>The above list is missing below values</p>
                <CodeBox
                  code={
                    <>
                      {missingValues[0].map((v, i) => (
                        <span key={i}>{v}</span>
                      ))}
                    </>
                  }
                />
              </>
            )}
          </div>
          <div>
            <InputTextArea
              placeHolder={"Paste data here..."}
              onChangeFunction={setRightInput}
              width={300}
            />
            {missingValues[1]?.length > 0 && (
              <>
                <p>The above list is missing below values</p>
                <CodeBox
                  code={
                    <>
                      {missingValues[1].map((v, i) => (
                        <span key={i}>{v}</span>
                      ))}
                    </>
                  }
                />
              </>
            )}
          </div>
        </div>

        <Button
          onClickFunction={() => checkForDiffs()}
          title={"Format & Copy"}
          disabled={leftDataInput.length === 0 || rightDataInput.length === 0}
        />
      </main>
    </div>
  );
};

export default Difffinder;
