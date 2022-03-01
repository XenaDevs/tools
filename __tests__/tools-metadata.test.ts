import { readdirSync } from "fs";
import { BUILD_TOOLS_LIST } from "../utils/utils";

describe("All tool components should export tool metadata", () => {
  it("should get tool metadata for all tools", async () => {
    const toolsMetaData = await BUILD_TOOLS_LIST();

    toolsMetaData.forEach((metaData) => {
      expect(metaData.label).toEqual(expect.any(String));
      expect(metaData.path).toEqual(expect.any(String));
      expect(metaData.shortDesc).toEqual(expect.any(String));
    });

    expect(toolsMetaData.length).toEqual(readdirSync("./pages/tools").length);
  });
});
