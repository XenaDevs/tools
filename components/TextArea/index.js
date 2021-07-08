export default function TextArea(props) {
  return (
    <div className="input-group">
      <span className="input-group-text">Input</span>
      <textarea
        className="form-control"
        aria-label="With textarea"
        onChange={(e) => {
          props.onChangeFunction(e.target.value);
        }}
        rows="5"
        autoFocus
      />
    </div>
  );
}
