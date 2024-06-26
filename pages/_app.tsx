import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Router, useRouter } from "next/router";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { HomeButton } from "../components";
import { addToolVisit } from "../utils/local-storage";
import { useEffect } from "react";
import Head from "next/head";
import { GTMPageView } from "utils/gtm";
import Footer from "./_footer";

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
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7374607841609153"
          crossOrigin="anonymous"
        ></script>
        <meta name="msvalidate.01" content="B9D02066D8DFE26FBAC9B6A1CAFD5A73" />
        <meta
          name="google-site-verification"
          content="p53MEb9hCZV5iUNGxpHxnaRPOkwFSY5_33nbffbcSyw"
        />
      </Head>
      <GoogleAnalytics trackPageViews />
      <div id="layoutWrapper">
        {!homePath && <HomeButton />}
        <main className="px-5 md:px-10 lg:px-30">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MyApp;
