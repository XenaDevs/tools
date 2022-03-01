import { readdirSync } from "fs";

export interface ToolMetaData {
  path: string;
  label: string;
  shortDesc: string;
}

export const BUILD_TOOLS_LIST = async (): Promise<ToolMetaData[]> => {
  return new Promise((resolve) => {
    const toolMetaData: Array<ToolMetaData> = [];

    const files = readdirSync("./pages/tools");
    files.forEach(async (file) => {
      const metaData = await import(`../pages/tools/${file}/tool-metadata`);
      toolMetaData.push(metaData.toolMetaData);
    });
    resolve(toolMetaData);
  });
};
