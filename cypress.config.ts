import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    specPattern: "__tests__/cypress/*cy.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:3000",
    supportFile: false,
    video: false,
  },
});
