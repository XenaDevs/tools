import { Button as ChakraButton } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

export interface UuidButtonParams {
  isClicked: boolean;
  value: string;
  setIsClicked: Function;
}

export const UuidButton = (params: UuidButtonParams) => {
  const { isClicked, setIsClicked, value } = params;
  return (
    <ChakraButton
      colorScheme="teal"
      size="xs"
      rightIcon={isClicked ? <CheckIcon /> : undefined}
      onClick={() => {
        setIsClicked(true);
        navigator.clipboard.writeText(value);
      }}
      style={{ position: "absolute", marginLeft: 380 }}
    >
      Copy
    </ChakraButton>
  );
};
