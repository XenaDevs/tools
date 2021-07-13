import { Textarea } from '@chakra-ui/react';

export default (props) => {
  return (
    <div className="input-group">
      <span className="input-group-text">Input</span>
      <Textarea
        className="form-control"
        aria-label="With textarea"
        placeholder={props.placeholder || ''}
        onChange={(e) => {
          props.onChangeFunction(e.target.value);
        }}
        rows="5"
        autoFocus
      />
    </div>
  );
};
