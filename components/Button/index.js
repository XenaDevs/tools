export default function TextArea(props) {
  return (
    <button
      type="button"
      className={`btn btn-lg btn-${props.buttonType || 'primary'}`}
      disabled={props.disabled}
      onClick={props.onClickFunction}
    >
      {props.title}
    </button>
  );
}
