export interface InputTextAreaParams {
  width?: number;
  placeHolder: string;
  onChangeFunction: Function;
}

export const InputTextArea = (params: InputTextAreaParams) => {
  const { placeHolder, onChangeFunction } = params;
  return (
    <textarea
      className="text-Black bg-White p-4 my-5 w-full h-60"
      aria-label="With textarea"
      placeholder={placeHolder || ""}
      onChange={(e) => {
        onChangeFunction(e.target.value);
      }}
    />
  );
};
