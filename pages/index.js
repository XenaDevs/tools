import React from 'react';
import { Text, Heading, Box } from '@chakra-ui/react';
import Link from 'next/link';
import { BUILD_TOOLS_LIST } from '../utils/utils';

const Home = () => {
  const tools = BUILD_TOOLS_LIST().map((tool) => (
    <>
      <Box my="4">
        <Link href={tool.path}>
          <Heading size="lg">{tool.label}</Heading>
        </Link>
        <Text>{tool.shortDesc}</Text>
      </Box>
    </>
  ));

  return tools;
};

export default Home;
