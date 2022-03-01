import { Code } from "@chakra-ui/react";
import { ReactElement } from "react";

export interface CodeBoxParams {
  colorScheme?: string | null;
  width?: string | null;
  code: string | null | ReactElement<any, any>;
}

export const CodeBox = (params: CodeBoxParams) => {
  const { code, colorScheme, width } = params;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Code
        colorScheme={colorScheme || "gray"}
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          width: width || "25%",
          borderRadius: 3,
        }}
      >
        {code}
      </Code>
    </div>
  );
};
