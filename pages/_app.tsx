import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import { Header } from "../components";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
