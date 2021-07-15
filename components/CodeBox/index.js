import { Code } from '@chakra-ui/react';

const CodeBox = (props) => {
  return (
    <Code
      colorScheme={props.colorScheme || 'gray'}
      style={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        width: props.width || '25%',
        borderRadius: 3,
      }}
    >
      {props.code}
    </Code>
  );
};

export default CodeBox;
