import React from 'react';
import { Center, Link } from '@chakra-ui/react';

const Header = () => {
  return (
    <Center h="50px" boxShadow="1px 1px 1px #ccc" fontSize="1.8rem" mb="4">
      <Link href="/">Tools</Link>
    </Center>
  );
};

export default Header;
