import { toolsList } from "../../utils/tools";

describe("should render tools", () => {
  toolsList.forEach((tool) => {
    it(`${tool.label} renders and has valid metadata tags`, () => {
      cy.visit(tool.path);

      // Tool should have title set
      cy.get("head title").should("include.text", tool.meta.title);

      // Tool should have meta description set
      cy.get("head meta[name=description]").should(
        "have.attr",
        "content",
        tool.meta.description
      );

      // Tool should have meta keywords set
      cy.get("head meta[name=keywords]").should(
        "have.attr",
        "content",
        tool.meta.keywords.join(", ")
      );
    });
  });
});
