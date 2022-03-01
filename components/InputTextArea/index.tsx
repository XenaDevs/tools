import { Textarea } from "@chakra-ui/react";

export interface InputTextAreaParams {
  width?: number;
  placeHolder: string;
  isValid?: boolean;
  onChangeFunction: Function;
}

export const InputTextArea = (params: InputTextAreaParams) => {
  const { width, placeHolder, isValid, onChangeFunction } = params;
  return (
    <div className="input-group">
      <span
        className="input-group-text"
        style={{ width: "100%", display: "block" }}
      >
        Input
      </span>
      <Textarea
        style={{ width: width || "50%", textAlign: "left" }}
        className="form-control"
        aria-label="With textarea"
        placeholder={placeHolder || ""}
        isInvalid={isValid}
        onChange={(e) => {
          onChangeFunction(e.target.value);
        }}
        rows={5}
        autoFocus
      />
    </div>
  );
};
