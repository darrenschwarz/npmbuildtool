var glob = require("glob");
var jshint = require("jshint");
 
// options is optional 
glob("**/*.js", null, function (er, files) {
  // files is an array of filenames. 
  // If the `nonull` option is set, and nothing 
  // was found, then files is ["**/*.js"] 
  // er is an error object or null. 
  node jshint 'index.js';
})