import { ChakraProvider } from '@chakra-ui/react';
import './globalStyles.css';
import Header from '../components/Header';

const globalHome = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default globalHome;
