export interface InputTextAreaParams {
  width?: number;
  placeHolder: string;
  onChangeFunction: Function;
}

export const InputTextArea = (params: InputTextAreaParams) => {
  const { width, placeHolder, onChangeFunction } = params;
  return (
    <div className="input-group">
      <span
        className="input-group-text"
        style={{ width: "100%", display: "block" }}
      >
        Input
      </span>
      <textarea
        style={{ width: width || "50%", textAlign: "left" }}
        className="form-control"
        aria-label="With textarea"
        placeholder={placeHolder || ""}
        onChange={(e) => {
          onChangeFunction(e.target.value);
        }}
        rows={5}
        autoFocus
      />
    </div>
  );
};
