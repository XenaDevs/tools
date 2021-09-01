require('babel-plugin-require-context-hook/register')();

describe('All tool components should export tool metadata', () => {
  const requireComponent = require.context('../../pages/tools', true, /.js$/);

  requireComponent
    .keys()
    .map((fileName) => requireComponent(fileName))
    .forEach((tool) => {
      console.log(tool);
      const toolMetadata = tool.toolMetaData;
      it(`${tool.name} should render`, () => {
        cy.visit(toolMetadata?.path);
      });
    });
});
