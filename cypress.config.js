const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "dq4iim",
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Testes de API - qazando',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    screenshots: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
