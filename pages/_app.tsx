import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { HomeButton } from "../components";
import { addToolVisit } from "../utils/local-storage";
import { useEffect } from "react";
import Footer from "./_footer";
import Head from "next/head";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const homePath = router.pathname === "/";

  useEffect(() => {
    const path = router.pathname;
    if (homePath) return;
    addToolVisit(path);
  }, [homePath, router.pathname]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {!homePath && <HomeButton />}
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
