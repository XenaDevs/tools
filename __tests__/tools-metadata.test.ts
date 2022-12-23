import { readdirSync } from "fs";
import { toolsList } from "../utils/tools";

describe("All tool components should export tool metadata", () => {
  it("should get tool metadata for all tools", () => {
    const toolsMetaData = toolsList;

    toolsMetaData.forEach((metaData) => {
      expect(metaData.label).toEqual(expect.any(String));
      expect(metaData.path).toEqual(expect.any(String));
      expect(metaData.shortDesc).toEqual(expect.any(String));
    });

    expect(toolsMetaData.length).toEqual(readdirSync("./pages/tools").length);
  });
});
