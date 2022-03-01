import { Heading as ChakraHeading } from "@chakra-ui/react";

export interface HeadingComponentParams {
  isTruncated?: boolean;
  text: string;
}

export const Heading = (params: HeadingComponentParams) => {
  const { text, isTruncated } = params;
  return (
    <ChakraHeading
      isTruncated={isTruncated || false}
      style={{ textAlign: "center" }}
    >
      {text}
    </ChakraHeading>
  );
};
