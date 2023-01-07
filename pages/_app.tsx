import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Router, useRouter } from "next/router";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { HomeButton } from "../components";
import { addToolVisit } from "../utils/local-storage";
import { useEffect } from "react";
import Footer from "./_footer";
import Head from "next/head";
import Script from "next/script";
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
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-W2Z8CBD')
      `}
      </Script>
      <Footer />
    </>
  );
};

export default MyApp;
