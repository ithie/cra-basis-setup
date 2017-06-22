// used https://babeljs.io/repl/ to transpile for people without es6
/* eslint-disable */

var fs = require('fs');
var _ = require('lodash');

var typeConfiguration = require('./bin/config');

var setupDir = require('./bin/dir');
var writeFiles = require('./bin/file');

/**
 @TODO Add generate routes.
  */

var generateFiles = function generateComponent(typeConfig, name) {
  setupDir(typeConfig.dir, name);
  writeFiles(typeConfig.dir, name, typeConfig.template);
};

var isValidType = function isComponentCall(type) {
  return typeof typeConfiguration[type] !== 'undefined';
};

var processArgs = process.argv;

if (processArgs.length > 4) {
  console.log('Too many arguments: Expected 2 / Given ' + processArgs.length - 2);
} else if (processArgs.length < 4) {
  console.log('Too less arguments given: Expected `create [TYPE] [NAME]`');
} else {
  var type = _.last(processArgs.slice(0, processArgs.length - 1));
  var name = _.last(processArgs);

  if (isValidType(type)) {
    console.log('GENERATE COMPONENT', type + '/' + name);
    generateFiles(typeConfiguration[type], name);
  } else {
    console.log('Unsupported Type', type);
  }
}
