Object.assign(global, require('cucumber'));
let tags = process.env.CUCUMBER_TAGS != undefined && process.env.CUCUMBER_TAGS != '' ?
           process.env.CUCUMBER_TAGS + ' and ' : '';
tags = tags + 'not (@ignore or @pending)';

exports.config = {
    services: ['selenium-standalone'],
    specs: [
        'features/*.feature'
    ],
    capabilities: [{
        maxInstances: 1,
        platformName: 'MAC',
        browserName: 'chrome',
        chromeOptions: {
            args: ['headless', 'disable-gpu']
        },
        isHeadless: false,
        autoLaunch: true
    }],
    screenshotPath: './tests/errorShots/',
    baseUrl: 'http://localhost',
    port: '4723',
    waitforTimeout: 20000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'cucumber',
    reporters: ['spec'],
    cucumberOpts: {
        compiler: [
            'js:babel-register',
        ],
        require: [
            './tests/helpers/init.js',
            './tests/steps/*.js'
        ],
        tagExpression: tags,
        timeout: 120000,
    },

    before: function () {
        global.expect = require('chai').expect;
        global.client = browser;
    }

};
