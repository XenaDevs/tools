import "../styles/globals.css";
import type { AppProps } from "next/app";
import { HomeButton } from "../components";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      {window.location.pathname != '/' && <HomeButton />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
