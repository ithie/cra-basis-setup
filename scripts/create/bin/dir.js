/* eslint-disable */

var fs = require('fs');

var createBaseDir = function createBaseDir(type) {
  try {
    fs.accessSync(__dirname + '/../../../src/' + type);
  } catch (e) {
    fs.mkdirSync(__dirname + '/../../../src/' + type + '/');
  }
};

var createFileDir = function createComponentDir(dir, name) {
  try {
    fs.accessSync(__dirname + '/../../../src/' + dir + '/' + name);
  } catch (e) {
    fs.mkdirSync(__dirname + '/../../../src/' + dir + '/' + name);
  }
};

var setupDir = function handleDir(type, name) {
  createBaseDir(type);
  createFileDir(type, name);
};

module.exports = setupDir;
