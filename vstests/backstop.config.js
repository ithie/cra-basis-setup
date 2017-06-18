var fs = require('fs');
var path = require('path');
var urlJoin = require('url-join');
var _ = require('lodash');

var ciConfig = require('./backstop.config.ci');
var localConfig = require('./backstop.config.local');

var setup = process.env['CI'] === 'true' ? ciConfig : localConfig;

var unixPath = function(filepath) {
  return filepath.split(path.sep).join('/');
};

var getComponentName = function(filePath) {
  return _.last(filePath.split('/')).split('.js')[0];
};

var walk = function walk(dir) {
  var results = [];
  fs.readdirSync(dir).forEach(function(file) {
    var filePath = path.join(dir, file);
    var stats = fs.statSync(filePath);
    if (stats.isDirectory() && filePath.indexOf('__snapshots__') < 0 && filePath.indexOf('__screenshots__') < 0) {
      results = results.concat(walk(filePath));
    } else {
      if (filePath.indexOf('.js') > 0 && filePath.indexOf('.test.js') <= 0) {
        results.push(getComponentName(unixPath(filePath)));
      }
    }
  });
  return results;
};

var backStopConfig = {
  baseUrl: setup.baseUrl,
  baseDir: 'src/components',
  urlTail: '',
  scenarioConfiguration: {
    label: '',
    hideSelectors: [],
    removeSelectors: [],
    selectorExpansion: true,
    selectors: ['div[data-preview]'],
    readyEvent: null,
    delay: 500,
    misMatchThreshold: 0.1,
    onBeforeScript: 'onBefore.js',
    onReadyScript: 'onReady.js',
  },
  id: 'mgldb',
  fileNameTemplate: '{scenarioLabel}_{selectorIndex}_{viewportLabel}',
  viewports: [
    {
      // iPhone 4
      name: 'XXS',
      width: 320,
      height: 480,
    },
    {
      // iPhone 6 (portrait)
      name: 'XS',
      width: 375,
      height: 667,
    },
    {
      // iPhone 6 (landscape)
      name: 'SM',
      width: 667,
      height: 375,
    },
    {
      // iPad (portrait)
      name: 'MD',
      width: 768,
      height: 1024,
    },
    {
      // iPad (landscape)
      name: 'LG',
      width: 1024,
      height: 768,
    },
    {
      // Mac Book
      name: 'XL',
      width: 1280,
      height: 800,
    },
    {
      name: 'XXL',
      width: 1680,
      height: 1050,
    },
  ],
  get scenarios() {
    var testGroup = walk(this.baseDir);
    return testGroup.map(componentName =>
      _.assign({}, this.scenarioConfiguration, {
        label: componentName,
        url: urlJoin(this.baseUrl, '#!', componentName),
      })
    );
  },
  paths: {
    bitmaps_reference: 'test/backstop_data/bitmaps_reference',
    bitmaps_test: 'test/backstop_data/bitmaps_test',
    casper_scripts: 'test/backstop_data/casper_scripts',
    html_report: 'test/backstop_data/html_report',
    ci_report: 'test/backstop_data/ci_report',
  },
  casperFlags: [],
  engine: 'phantomjs',
  report: ['ci'],
  debug: true,
};

module.exports = backStopConfig;
