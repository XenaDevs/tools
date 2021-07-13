import { Code } from '@chakra-ui/react';

export default (props) => {
  return (
    <Code
      style={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        width: props.width || '25%',
      }}
    >
      {props.code}
    </Code>
  );
};
