import { Input } from "@chakra-ui/react";

export interface InputAreaParams {
  isInvalid: boolean;
  placeHolder: string;
  onChangeFunction: Function;
  disabled?: boolean;
}

export const InputArea = (params: InputAreaParams) => {
  const { isInvalid, placeHolder, onChangeFunction, disabled } = params;
  return (
    <Input
      isInvalid={isInvalid}
      errorBorderColor="red.300"
      placeholder={placeHolder}
      onChange={(e) => onChangeFunction(e.target.value)}
      disabled={disabled}
    />
  );
};
