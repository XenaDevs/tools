import { MouseEventHandler } from "react";

export interface ButtonParams {
  buttonType?: string | null;
  disabled?: boolean;
  onClickFunction: MouseEventHandler<HTMLButtonElement>;
  title: string;
}

export const Button = (params: ButtonParams) => {
  const { buttonType, disabled, onClickFunction, title } = params;
  return (
    <button
      type="button"
      className={`btn btn-lg btn-${buttonType || "primary"}`}
      disabled={disabled}
      onClick={onClickFunction}
    >
      {title}
    </button>
  );
};
