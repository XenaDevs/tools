import NextHead from "next/head";
import { ToolMetaData } from "utils/tools";

export const Head = ({ tool }: { tool: ToolMetaData }) => {
  return (
    <NextHead>
      <title>{tool.meta.title}</title>
      <meta name="keywords" content={tool.meta.keywords.join(", ")} />
      <meta name="description" content={tool.meta.description} />
      <meta name="twitter:title" content={tool.meta.title} />
      <meta name="twitter:description" content={tool.meta.description} />
    </NextHead>
  );
};
