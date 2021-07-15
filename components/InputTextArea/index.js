import { Textarea } from '@chakra-ui/react';

const InputTextArea = (props) => {
  return (
    <div className="input-group">
      <span className="input-group-text">Input</span>
      <Textarea
        className="form-control"
        aria-label="With textarea"
        placeholder={props.placeHolder || ''}
        onChange={(e) => {
          props.onChangeFunction(e.target.value);
        }}
        rows="5"
        autoFocus
      />
    </div>
  );
};

export default InputTextArea;
