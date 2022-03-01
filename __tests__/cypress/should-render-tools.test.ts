import { toolsList } from "../../utils/tools";

describe("should render tools", () => {
  toolsList.forEach((tool) => {
    it(`Can render ${tool.label}`, () => {
      cy.visit(tool.path);
    });
  });
});
