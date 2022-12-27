import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { HomeButton } from "../components";
import { useEffect } from "react";
import { addToolVisit } from "../utils/local-storage";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const notHomePath = router.pathname !== "/";

  useEffect(() => {
    const path = router.pathname;
    if (!path.includes("/tools/")) return;
    addToolVisit(path);
  }, [router.pathname]);

  return (
    <>
      {notHomePath && <HomeButton />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
