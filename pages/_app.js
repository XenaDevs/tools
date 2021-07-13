import { ChakraProvider } from '@chakra-ui/react';
import './globalStyles.css';

export default ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};
