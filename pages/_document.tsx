// pages/_document.js

import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            lang="en"
            content="Custom micro-service tools"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className="font-poppins bg-BG text-White">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
