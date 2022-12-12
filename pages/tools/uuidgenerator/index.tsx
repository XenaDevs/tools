import Head from "next/head";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "../../../components";
import { UuidButton } from "../../../components";

const UuidGenerator = () => {
  const [amountToGenerate, setAmountToGenerate] = useState(1);
  const [uuids, setUuids] = useState<Array<string>>([]);

  return (
    <div className="container">
      <Head>
        <title>Tools - UUID generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <div>
          <select
            placeholder="Select amount"
            onChange={(e) => setAmountToGenerate(parseInt(e.target.value))}
          >
            <option value="1">1</option>
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>

          <Button
            title="Generate uuid"
            onClickFunction={async () => {
              setUuids([...Array(amountToGenerate)].map(() => uuidv4()));
            }}
          />
        </div>

        <div>
          {uuids.map((id) => {
            return (
              <div key={id}>
                <p>{id}</p>
                <UuidButton
                  value={id}
                  setIsClicked={
                    () => console.log("todo, mark me as pressed in UI") // TODO
                  }
                />
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default UuidGenerator;
