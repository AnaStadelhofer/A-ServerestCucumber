const cucumber = require('cypress-cucumber-preprocessor').default;
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1300,
  viewportWidth: 720,
  env: { baseUrl: "https://serverest.dev/" },
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },

    baseUrl: "https://serverest.dev/",
    specPattern: "cypress/features/*.feature",
    reporter: "mochaawesome",
    reporterOptions: {
      reporterDir: "cypress/reports",
      overwrite: true,
      html: false,
      json: true
    }
  },
});
