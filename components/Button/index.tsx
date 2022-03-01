import { Button as ChakraButton } from "@chakra-ui/react";
import { JSXElementConstructor, MouseEventHandler, ReactElement } from "react";

export interface ButtonParams {
  buttonType?: string | null;
  disabled: boolean;
  onClickFunction: MouseEventHandler<HTMLButtonElement>;
  rightIcon?:
    | ReactElement<any, string | JSXElementConstructor<any>>
    | undefined;
  leftIcon?: ReactElement<any, string | JSXElementConstructor<any>> | undefined;
  title: string;
}

export const Button = (params: ButtonParams) => {
  const { buttonType, disabled, onClickFunction, rightIcon, leftIcon, title } =
    params;
  return (
    <ChakraButton
      type="button"
      className={`btn btn-lg btn-${buttonType || "primary"}`}
      disabled={disabled}
      onClick={onClickFunction}
      rightIcon={rightIcon}
      leftIcon={leftIcon}
    >
      {title}
    </ChakraButton>
  );
};
