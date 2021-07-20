import { Input } from '@chakra-ui/react';

const InputArea = (props) => {
  return (
    <Input
      isInvalid={props.isInvalid}
      errorBorderColor="red.300"
      placeholder={props.placeholder}
      onChange={(e) => props.onChangeFunction(e.target.value)}
    />
  );
};

export default InputArea;
