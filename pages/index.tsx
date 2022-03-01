import React from "react";
import { Text, Heading, Box, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { ToolMetaData } from "../utils/utils";
import { toolsList } from "../utils/tools";

const Home = () => {
  const tools = toolsList.map((tool: ToolMetaData, i: number) => (
    <Box my="4" key={i}>
      <ChakraLink>
        <Link href={tool.path} passHref>
          <Heading size="lg">{tool.label}</Heading>
        </Link>
      </ChakraLink>

      <Text>{tool.shortDesc}</Text>
    </Box>
  ));
  return tools;
};

export default Home;
