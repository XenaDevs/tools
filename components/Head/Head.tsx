import NextHead from "next/head";
import { ToolMetaData } from "utils/tools";

export const Head = ({ tool }: { tool: ToolMetaData }) => {
  return (
    <NextHead>
      <title>{tool.label}</title>
      <meta name="keywords" content={tool.keywords.join(",")} />
      <meta name="description" content={tool.shortDesc} />
      <meta name="twitter:title" content={tool.label} />
      <meta name="twitter:description" content={tool.shortDesc} />
    </NextHead>
  );
};
