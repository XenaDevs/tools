import { useState } from "react";
import { InputTextArea, Button, ToolTemplate } from "../../../components";
import { toolMetaData } from "./tool-metadata";

const INVALID_BASE64_STRING_ERROR_MESSAGE = "Invalid base64 string";

const Base64 = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const encode = () => {
    setResult(btoa(value));
  };
  const decode = () => {
    try {
      setResult(atob(value));
    } catch (cause) {
      setResult(INVALID_BASE64_STRING_ERROR_MESSAGE);
    }
  };

  const tool = (
    <>
      <InputTextArea
        placeHolder={"YmFzZTY0 = base64"}
        onChangeFunction={setValue}
      />

      <div className="flex flex-row">
        <div className="basis-1/2">
          <Button
            onClick={() => {
              encode();
            }}
            disabled={value.length === 0}
            text="Encode"
          />
        </div>
        <div className="basis-1/2">
          <Button
            onClick={() => {
              decode();
            }}
            disabled={value.length === 0}
            text="Decode"
          />
        </div>
      </div>

      {result.length > 0 && result !== INVALID_BASE64_STRING_ERROR_MESSAGE && (
        <Button
          onClick={() => navigator.clipboard.writeText(result)}
          disabled={value.length === 0}
          text="Copy result"
        />
      )}

      <p
        style={{
          color:
            result === INVALID_BASE64_STRING_ERROR_MESSAGE ? "red" : "white",
        }}
      >
        {result}
      </p>
    </>
  );

  return <ToolTemplate tool={tool} metadata={toolMetaData} />;
};

export default Base64;
