const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //pageLoadTimeout: 3000,
    //taskTimeout: 4000
  },
});
