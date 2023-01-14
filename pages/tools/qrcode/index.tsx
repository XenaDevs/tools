import QRCode from "qrcode";
import React, { useEffect, useState } from "react";
import { Button, InputTextArea } from "components";
import { toolMetaData } from "./tool-metadata";
import { Head } from "components/Head/Head";

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

  return (
    <>
      <main className="px-10 md:px-20 lg:px-30 max-w-5xl mx-auto">
        <Head tool={toolMetaData} />
        <section className="min-h-screen py-20">
          <div className="flex flex-col gap-12 items-center mb-10">
            <p>
              We support creation of QR codes with emojis, chinese, cyrillic,
              greek and japanese characters.
            </p>
          </div>
          <p>Here is a preview of a finished QR</p>
          <p>Scan me!</p>
          <div className="flex justify-center" id="canvasWrapper"></div>
          <InputTextArea
            placeHolder="Add custom content here"
            onChangeFunction={inputQrText}
          />
          <Button onClick={() => generateQRCode(text)} text="Generate Qr" />
        </section>
      </main>
    </>
  );
};

export default QRTool;
