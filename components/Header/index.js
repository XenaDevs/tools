import React from 'react';
import { Center, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';
const Header = () => {
  return (
    <Center h="50px" boxShadow="1px 1px 1px #ccc" fontSize="1.8rem" mb="4">
      <ChakraLink>
        <Link href="/">Tools</Link>
      </ChakraLink>
    </Center>
  );
};

export default Header;
