const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env: {
    usuario: "pushingit",
    password: "123456!",
    baseUrlAPI: 'https://pushing-it.onrender.com/api',
    token: '',
    homeUrl: 'https://pushing-it.vercel.app/'
  }
});
