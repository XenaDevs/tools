import { ToolTemplate } from "components";
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

  const tool = (
    <>
      <div>
        <p>{error}</p>
        <div className="mt-10" />
        <InputTextArea
          placeHolder={"Paste data here..."}
          onChangeFunction={testing}
        />
      </div>

      {buildAllIcons()}
    </>
  );

  return <ToolTemplate metadata={toolMetaData} tool={tool} />;
};

export default BarCodes;
