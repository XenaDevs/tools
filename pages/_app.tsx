import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { HomeButton } from "../components";
import { useEffect, useState } from "react";
import { AddToolVisit } from "../utils/local-storage";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const [path, setPath] = useState<Boolean>(false);

  useEffect(() => {
    const notHomePath = router.pathname !== "/";
    if (notHomePath) setPath(true);
    AddToolVisit(router.pathname);
  }, [router.pathname]);

  return (
    <>
      {path && <HomeButton />}
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
