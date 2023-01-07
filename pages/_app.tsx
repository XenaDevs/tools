import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Router, useRouter } from "next/router";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { HomeButton } from "../components";
import { addToolVisit } from "../utils/local-storage";
import { useEffect } from "react";
import Footer from "./_footer";
import Head from "next/head";
import { GTMPageView } from "utils/gtm";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const homePath = router.pathname === "/";

  // Initiate GTM
  useEffect(() => {
    const handleRouteChange = (url: string) => GTMPageView(url);
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

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
      <GoogleAnalytics trackPageViews />
      {!homePath && <HomeButton />}
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
