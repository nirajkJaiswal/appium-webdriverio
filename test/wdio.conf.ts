exports.config = {
    port: 4724,
    path: '/wd/hub/',
    runner: 'local',
    specs: ['./test/specs/*.js'],
    maxInstances: 1,
    capabilities: [
      {
        platformName: 'Android',
        platformVersion: '11',
        appPackage: 'com.facebook.katana',
        appActivity: 'com.facebook.katana.LoginActivity',
        automationName: 'UiAutomator2'
      }
    ],
    services: [
      [
        'appium',
        {
          args: {
            relaxedSecurity: true
           },
          command: 'appium'
        }
      ]
    ],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: [
      [
        'allure',
        {
          outputDir: 'allure-results',
          disableWebdriverStepsReporting: true,
          disableWebdriverScreenshotsReporting: false
        }
      ]
    ],
    mochaOpts: {
      ui: 'bdd',
      timeout: 60000
    },
    afterTest: function(test, context, { error, result, duration, passed, retries }) {
      if (!passed) {
          browser.takeScreenshot();
      }
    }
   }