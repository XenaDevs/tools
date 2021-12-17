import { useState } from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

const UuidButton = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <ChakraButton
      colorScheme="teal"
      size="xs"
      rightIcon={isClicked ? <CheckIcon /> : ''}
      onClick={() => {
        setIsClicked(true);
        navigator.clipboard.writeText(props.value);
      }}
      style={{ position: 'absolute', marginLeft: 380 }}
    >
      Copy
    </ChakraButton>
  );
};

export default UuidButton;
