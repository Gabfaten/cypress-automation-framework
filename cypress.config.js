const { defineConfig } = require("cypress");
//related with getConfigurationByFile function
const fs = require('fs-extra');
const path = require('path');

//to override the basic url 
function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress_udemy\\config', `${file}.json`);

  if (!fs.existsSync(pathToConfigFile)) {
    console.log("No custom config file found.");
    return {};

  }
  return fs.readJson(pathToConfigFile);
}
module.exports = defineConfig({
  //projectId automatically created when link the project to the cypress dashboard
  projectId: 'n178gy',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      const file = config.env.configFile || ''

      return getConfigurationByFile(file)

    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    //exclude spec in other folder
    excludeSpecPattern: "cypress/e2e/other/*.js",
    //we have only one baseUrl
    baseUrl: "http://www.webdriveruniversity.com",
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    //4000 by default
    defaultCommandTimeout: 10000,
    // 60000  by default
    //if the page not load in 2min then going to throw an error
    pageLoadTimeout: 120000,// 120000 milisecond -> 2min   
    //screenshots folder will be created by cypress 
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,//clear screenshot folder before run
    video: true,
    viewportHeight: 1080,
    viewportWidth: 1920,
    reporter: 'cypress-mochawesome-reporter',
    //not work generation of  mochawesome html version
    //we must create manually reporter-config.json
    // reporter: 'cypress-multi-reporters',
    // reporterOptions: {
    // configFile: 'reporter-config.json', 
    // },    
    //use environment variables to set a base url    
    env: {
      first_name: "Sarah",
      //dynamics Url's
      webdriveruni_homepage: "http://www.webdriveruniversity.com"
    },
    retries: {
      // Configure retry attempts for `cypress run`
      // Default is 0
      runMode:0,
      // Configure retry attempts for `cypress open`
      // Default is 0
      // execute the test once and try again if that given test fail 
      openMode: 0
    }

  },

});
