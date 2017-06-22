/* eslint-disable */

var fs = require('fs');
var path = require('path');

var writeFile = function writeFile(filepath, content) {
  return fs.writeFileSync(filepath, content);
};

// turns a unix path into local path
var localPath = function localPath(filepath) {
  return filepath.split('/').join(path.sep);
};

var getTemplateDir = function getTemplateDir() {
  return __dirname + '/../templates/';
};

var readFile = function readFile(dir, filename) {
  var filepath = localPath(dir);
  if (filename) {
    filepath = path.join(localPath(dir), filename);
  }
  try {
    var stats = fs.statSync(filepath);
    if (stats && stats.isFile()) {
      return fs.readFileSync(filepath, 'utf-8');
    }
  } catch (e) {
    // do nothing
  }
  return undefined;
};

var replaceContent = function replaceContent(content, type, name) {
  return content.replace(/ComponentType/g, name).replace(/Component/g, type).replace(/constant/g, name);
};

var getReadme = function getReadme(name) {
  return readFile(getTemplateDir(), name + '.md');
};
var getJs = function getJs(name) {
  return readFile(getTemplateDir(), name + '.js');
};
var getTest = function getTest(name) {
  return readFile(getTemplateDir(), name + '.test.js');
};

var writeTest = function writeTest(type, name, templateName) {
  var testFile = replaceContent(getTest(templateName), type, name);

  writeFile(__dirname + '/../../../src/' + type + '/' + name + '/' + name + '.test.js', testFile);
};

var writeJs = function writeJs(type, name, templateName) {
  var jsFile = replaceContent(getJs(templateName), type, name);

  writeFile(__dirname + '/../../../src/' + type + '/' + name + '/' + name + '.js', jsFile);
};

var writeReadme = function writeReadme(type, name, templateName) {
  var readme = replaceContent(getReadme(templateName), type, name);

  writeFile(__dirname + '/../../../src/' + type + '/' + name + '/' + name + '.md', readme);
};

var writeFiles = function handleDir(dir, name, template) {
  writeReadme(dir, name, template);
  writeJs(dir, name, template);
  writeTest(dir, name, template);
};

module.exports = writeFiles;
