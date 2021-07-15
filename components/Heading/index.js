import { Heading } from '@chakra-ui/react';

const HeadingComponent = (props) => {
  return (
    <Heading
      isTruncated={props.isTruncated || false}
      style={{ textAlign: 'center' }}
    >
      {props.text}
    </Heading>
  );
};

export default HeadingComponent;
