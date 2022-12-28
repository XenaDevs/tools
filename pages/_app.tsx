import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { HomeButton } from "../components";
import { addToolVisit } from "../utils/local-storage";
import { useEffect } from "react";

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
      {!homePath && <HomeButton />}
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
