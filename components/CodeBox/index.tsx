import { ReactElement } from "react";

export interface CodeBoxParams {
  width?: string | null;
  code: string | null | ReactElement<any, any>;
}

export const CodeBox = (params: CodeBoxParams) => {
  const { code, width } = params;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <code
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          width: width || "25%",
          borderRadius: 3,
        }}
      >
        {code}
      </code>
    </div>
  );
};
