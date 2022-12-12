export interface InputAreaParams {
  placeHolder: string;
  onChangeFunction: Function;
  disabled?: boolean;
}

export const InputArea = (params: InputAreaParams) => {
  const { placeHolder, onChangeFunction, disabled } = params;
  return (
    <input
      placeholder={placeHolder}
      onChange={(e) => onChangeFunction(e.target.value)}
      disabled={disabled}
    />
  );
};
