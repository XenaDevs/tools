import Head from "next/head";
import { useState } from "react";
import { Heading, Button, CodeBox, InputTextArea } from "../../../components";

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
    <div className="container">
      <Head>
        <title>Tools - Database list formatter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {<Heading text={"Database list formatter"} />}

        <div className="description input">
          Example input
          {
            <CodeBox
              code={
                <>
                  <span>1</span>
                  <span>1</span>
                  <span>2</span>
                </>
              }
            />
          }
        </div>
        <div className="description output">
          Example output
          <CodeBox
            code={
              <>
                <span>in (</span>
                <span>{"1"},</span>
                <span>{"1"},</span>
                <span>{"2"})</span>
              </>
            }
          />
        </div>

        <InputTextArea
          placeHolder={"Paste data here..."}
          onChangeFunction={setDataInput}
        />

        <Button
          onClickFunction={() => translateToDbList()}
          title={"Format & Copy"}
          disabled={dataInput.length === 0}
        />
      </main>
    </div>
  );
};

export default DbFormat;
