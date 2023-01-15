import { Head } from "components/Head/Head";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "../../../components";
import { toolMetaData } from "./tool-metadata";

const UuidGenerator = () => {
  const [amountToGenerate, setAmountToGenerate] = useState(1);
  const [uuids, setUuids] = useState<Array<string>>([]);

  useEffect(() => {
    setUuids([uuidv4()]);
  }, []);

  return (
    <main className="px-10 md:px-20 lg:px-30 max-w-5xl mx-auto">
      <Head tool={toolMetaData} />

      <section className=" py-20">
        <h1 className="text-xl">UUID V4 generator</h1>

        <div className="mb-10 mt-5">
          <input
            className="text-Black w-20 h-10 mr-5"
            placeholder="Amount"
            onChange={(e) => setAmountToGenerate(parseInt(e.target.value))}
          />

          <Button
            text="Generate uuid"
            onClick={async () => {
              setUuids([...Array(amountToGenerate)].map(() => uuidv4()));
            }}
          />
        </div>

        {uuids.map((id) => {
          return (
            <div
              className="flex gap-10 my-2 items-center justify-center"
              key={id}
            >
              <p>{id}</p>
              <Button
                text="Copy"
                onClick={() => {
                  navigator.clipboard.writeText(id);
                }}
              />
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default UuidGenerator;
