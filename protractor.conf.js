// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const {
  SpecReporter
} = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      args: ['--no-sandbox']
    }
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () { }
  },
  beforeLaunch: function () {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
  },
  onPrepare() {
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      }
    }));

    browser.driver.manage().window().setSize(1650, 800);
    browser.get('/');
    // set elasticsearch host
    element(by.id('settings_link')).click().then(() => {
      let saveButton = element(by.id('save_button'));
      let esurlInput = element(by.id('esurl'));
      let testurl = 'http://elasticsearch:9200';
      esurlInput.clear();
      esurlInput.sendKeys(testurl);
      saveButton.click().then(() => {
        element(by.css('span.icon-close')).click();
      });
    });
  }
};
