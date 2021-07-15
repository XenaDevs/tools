import { ChakraProvider } from '@chakra-ui/react';
import './globalStyles.css';
import Header from '../components/Header';
import Head from 'next/head';

export default ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};
