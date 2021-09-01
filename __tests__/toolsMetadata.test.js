require('babel-plugin-require-context-hook/register')();

describe('All tool components should export tool metadata', () => {
  const requireComponent = require.context('../pages/tools', true, /.js$/);
  requireComponent
    .keys()
    .map((fileName) => requireComponent(fileName).default)
    .forEach((tool) => {
      const toolMetadata = tool.toolMetaData;
      it(`${tool.name} should have metadata`, async () => {
        expect(toolMetadata).toHaveProperty('path');
        expect(toolMetadata).toHaveProperty('label');
        expect(toolMetadata).toHaveProperty('shortDesc');
      });
    });
});
