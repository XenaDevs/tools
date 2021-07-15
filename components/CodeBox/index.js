import { Code } from '@chakra-ui/react';

const CodeBox = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
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
    </div>
  );
};

export default CodeBox;
