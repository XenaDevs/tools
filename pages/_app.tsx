import "../styles/globals.css";
import type { AppProps } from "next/app";
import {useRouter} from 'next/router'
import { HomeButton } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()
    const notHomePath = router.pathname !== '/'

    return (
      <>
      {notHomePath && <HomeButton />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
