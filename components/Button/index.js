import { Button } from '@chakra-ui/react';

const Buttonn = (props) => {
  return (
    <Button
      type="button"
      className={`btn btn-lg btn-${props.buttonType || 'primary'}`}
      disabled={props.disabled}
      onClick={props.onClickFunction}
    >
      {props.title}
    </Button>
  );
};

export default Buttonn;
