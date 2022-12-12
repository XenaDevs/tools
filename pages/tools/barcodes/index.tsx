import Head from "next/head";
import { useEffect, useState } from "react";
//import { Ean13Utils } from "ean13-lib";
const jsBarcode = require("jsbarcode");
import { InputTextArea } from "../../../components";
import { toolMetaData } from "./tool-metadata";

const BarCodes = () => {
  const [textAreaValues, setTextAreaValues] = useState(
    "111111111111\n222222222222\n333333333333\n444444444444"
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
    return textAreaValues
      .split("\n")
      .map((v, i) => <div key={i}>{buildSvgIcon(eanType, v)}</div>);
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

  const testing = async (val: string) => {
    await setTextAreaValues(val);
    await generateBarcodes();
  };

  useEffect(() => {
    generateBarcodes();
  }, []);

  return (
    <div className="container">
      <Head>
        <title>{toolMetaData.label}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <p>{error}</p>
          <InputTextArea
            placeHolder={"Paste data here..."}
            onChangeFunction={testing}
            width={300}
          />
        </div>

        <div>{buildAllIcons()}</div>
      </main>
    </div>
  );
};

export default BarCodes;
