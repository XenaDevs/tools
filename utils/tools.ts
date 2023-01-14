import { toolMetaData as barcodes } from "../pages/tools/barcodes/tool-metadata";
import { toolMetaData as dbformat } from "../pages/tools/dbformat/tool-metadata";
import { toolMetaData as difffinder } from "../pages/tools/difffinder/tool-metadata";
import { toolMetaData as jsonpathtester } from "../pages/tools/jsonpathtester/tool-metadata";
import { toolMetaData as uuidgenerator } from "../pages/tools/uuidgenerator/tool-metadata";
import { toolMetaData as qrCode } from "../pages/tools/qrcode/tool-metadata";

export interface ToolMetaData {
  path: string;
  label: string;
  shortDesc: string;
  meta: {
    title: string;
    description: string;
    keywords: Array<string>;
  };
}

export const toolsList: Array<ToolMetaData> = [
  qrCode,
  barcodes,
  dbformat,
  difffinder,
  jsonpathtester,
  uuidgenerator,
];

export const toolMap = toolsList.reduce(
  (acc: Record<string, ToolMetaData>, tool) => {
    acc[tool.path] = tool;

    return acc;
  },
  {}
);
