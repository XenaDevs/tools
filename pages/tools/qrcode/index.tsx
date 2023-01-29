import QRCode from "qrcode";
import React, { useEffect, useState } from "react";
import { Button, InputTextArea, ToolTemplate } from "components";
import { toolMetaData } from "./tool-metadata";

const QRTool = () => {
  const [text, setText] = useState("");

  const inputQrText = (input: string) => {
    try {
      setText(input);
    } catch (err) {
      console.log(err);
    }
  };
  const generateQRCode = (text: string) => {
    var opts = {
      margin: 1,
      height: 250,
      width: 250,
      color: {
        dark: "#1e1e24",
        light: "#f9a826",
      },
    };
    QRCode.toCanvas(text, opts, function (err, canvas) {
      if (err) throw err;
      const wrappedCanvas = document.getElementById("canvasWrapper");
      return wrappedCanvas?.replaceChildren(canvas);
    });
  };

  useEffect(() => {
    if (document.getElementById("canvasWrapper")?.childElementCount == 0) {
      generateQRCode(
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
      );
    }
  }, []);

  const tool = (
    <>
      <h1>QR-code creation tool</h1>
      <p>
        We support creation of QR codes with emojis, chinese, cyrillic, greek
        and japanese characters.
      </p>

      <p>Here is a preview of a finished QR</p>
      <p>Scan me!</p>
      <div className="flex justify-center" id="canvasWrapper"></div>
      <InputTextArea
        placeHolder="Add custom content here"
        onChangeFunction={inputQrText}
      />
      <Button onClick={() => generateQRCode(text)} text="Generate Qr" />
    </>
  );

  return <ToolTemplate tool={tool} metadata={toolMetaData} />;
};

export default QRTool;
