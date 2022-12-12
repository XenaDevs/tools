import { useState } from "react";
import { HomeButton, InputTextArea } from "../../../components";

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
    <main className='px-10 md:px-20 lg:px-40 max-w-5xl mx-auto'>
      <section className='min-h-screen pt-10'>
        <h2 className="text-xl">
          Database list formatter
        </h2>
        <div className="flex justify-center gap-24 lg:gap-36 mt-8">
          <div>
            <h3 className="text-xl">Example Input:</h3>
            <p>
              1 <br/>
              2 <br/>
              3 <br/>
              4 <br/>
              5
            </p>
          </div>
          <div>
            <h3 className="text-xl">Example Output:</h3>
            <p>
              in ( <br/>
              &apos;1&apos;, <br/>
              &apos;2&apos;, <br/>
              &apos;3&apos;, <br/>
              &apos;4&apos;, <br/>
              &apos;5&apos;)
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <InputTextArea
            placeHolder={"Paste data here..."}
            onChangeFunction={setDataInput}
          />

          <button
            className="bg-CTA text-Black p-2 rounded-md hover:bg-opacity-90 disabled:hover:cursor-not-allowed"
            onClick={() => translateToDbList()}
            disabled={dataInput.length === 0}
          >
            Format & Copy
          </button>
        </div>

      </section>
    </main>
  );
};

export default DbFormat;
