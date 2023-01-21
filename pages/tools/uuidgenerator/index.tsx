import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, ToolTemplate } from "../../../components";
import { toolMetaData } from "./tool-metadata";

const UuidRow = ({ id }: { id: string }) => {
  const [copied, setCopied] = useState(false);

  return (
    <div className="flex gap-10 my-2 items-center justify-center" key={id}>
      <p className="w-80">{id}</p>
      <Button
        key={id}
        text={copied ? "Copied" : "Copy"}
        onClick={() => {
          setCopied(true);
          navigator.clipboard.writeText(id);
        }}
      />
    </div>
  );
};

const UuidGenerator = () => {
  const [amountToGenerate, setAmountToGenerate] = useState(1);
  const [uuids, setUuids] = useState<Array<string>>([]);

  useEffect(() => {
    setUuids([uuidv4()]);
  }, []);

  const tool = (
    <>
      <div>
        <input
          className="text-Black w-20 h-10 mr-5"
          placeholder="Amount"
          defaultValue={1}
          onChange={(e) => setAmountToGenerate(parseInt(e.target.value))}
        />

        <Button
          text="Generate uuid"
          onClick={async () => {
            setUuids([...Array(amountToGenerate)].map(() => uuidv4()));
          }}
        />
      </div>

      {uuids.map((id, index) => {
        return <UuidRow id={id} key={id} />;
      })}
    </>
  );

  // eslint-disable-next-line react/jsx-no-undef
  return <ToolTemplate metadata={toolMetaData} tool={tool} />;
};

export default UuidGenerator;
