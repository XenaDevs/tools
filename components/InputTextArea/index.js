import { Textarea } from '@chakra-ui/react';

const InputTextArea = (props) => {
  return (
    <div className="input-group">
      <span
        className="input-group-text"
        style={{ width: '100%', display: 'block' }}
      >
        Input
      </span>
      <Textarea
        style={{ width: props.width || '50%', textAlign: 'left' }}
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
