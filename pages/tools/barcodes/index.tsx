import { Head } from "components/Head/Head";
import { useEffect, useState } from "react";
//import { Ean13Utils } from "ean13-lib";
const jsBarcode = require("jsbarcode");
import { InputTextArea } from "../../../components";
import { toolMetaData } from "./tool-metadata";

const BarCodes = () => {
  const [textAreaValues, setTextAreaValues] = useState(
    "111111111111\n222222222222\n333333333333"
  );
  const [eanType, _setEanType] = useState("EAN13");
  const [error, setError] = useState("");
  const buildSvgIcon = (eanType: string, value: string) => {
    return (
      <svg
        className="barcode"
        jsbarcode-format={eanType}
        jsbarcode-value={value}
        jsbarcode-textmargin="0"
        jsbarcode-fontoptions="bold"
      />
    );
  };

  const buildAllIcons = () => {
    return (
      <div className="gap-10 flex flex-wrap justify-center">
        {textAreaValues.split("\n").map((v, i) => buildSvgIcon(eanType, v))}
      </div>
    );
  };

  const generateBarcodes = () => {
    setError("");
    try {
      jsBarcode(".barcode", "barcode", {
        background: "#1A202C",
        lineColor: "#FFF",
      }).init();
    } catch (err) {
      console.log(err);
      setError(err as string);
    }
  };

  const testing = (val: string) => {
    setTextAreaValues(val);
    generateBarcodes();
  };

  useEffect(() => {
    generateBarcodes();
  }, []);

  return (
    <main className="px-10 md:px-20 lg:px-30 max-w-5xl mx-auto">
      <Head tool={toolMetaData} />

      <section className=" py-10">
        <h1 className="text-xl">Barcode Generator</h1>

        <div>
          <p>{error}</p>
          <div className="mt-10" />
          <InputTextArea
            placeHolder={"Paste data here..."}
            onChangeFunction={testing}
          />
        </div>

        {buildAllIcons()}
      </section>
    </main>
  );
};

export default BarCodes;
