import React from 'react';
import { Text, Heading, Box, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';
import { BUILD_TOOLS_LIST } from '../utils/utils';

const Home = () => {
  const tools = BUILD_TOOLS_LIST().map((tool) => (
    <>
      <Box my="4">
        <ChakraLink>
          <Link href={tool.path} passHref>
            <Heading size="lg">{tool.label}</Heading>
          </Link>
        </ChakraLink>

        <Text>{tool.shortDesc}</Text>
      </Box>
    </>
  ));

  return tools;
};

export default Home;
