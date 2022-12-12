// pages/_document.js

import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="font-poppins bg-BG text-White">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
