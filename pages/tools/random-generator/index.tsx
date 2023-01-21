import React, { useEffect, useState } from "react";
import { InputTextArea, ToolTemplate, Button } from "components";
import { toolMetaData } from "./tool-metadata";

// Always min to 0
const minLength = 0;
const defaultInput = `1\n2\n3\n4\n5\n6\n7\n8\n9\n10`;

const RandomGenerator = () => {
  const [input, setInput] = useState(defaultInput);
  const [randomValue, setRandomValue] = useState("");

  const getRandomValue = () => {
    const itemArray: Array<string> = input.split("\n");

    const randomNumber = Math.round(
      Math.random() * (itemArray.length - 1 - minLength) + minLength
    );

    setRandomValue(itemArray[randomNumber]);
  };

  useEffect(() => {
    getRandomValue();
  }, []);

  const tool = (
    <>
      <InputTextArea
        preWrittenInput={defaultInput}
        onChangeFunction={setInput}
        placeHolder={"Your input here"}
      />
      <Button onClick={getRandomValue} text={"Generator random value"} />
      <p className="pt-4">
        Your random value: <span className="font-bold">{randomValue}</span>
      </p>
    </>
  );

  return <ToolTemplate tool={tool} metadata={toolMetaData} />;
};

export default RandomGenerator;
