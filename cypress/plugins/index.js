const cucumber = require('cypress-cucumber-preprocessor').default;
const browserify = require("@cypress/browserify-preprocessor");

module.exports = (on, config) => {
  const options = browserify.defaultOptions;
  options.browserifyOptions.extensions.push('.feature');
  options.browserifyOptions.plugin.unshift(['tsify', {project: 'cypress/tsconfig.json'}]);
  on('file:preprocessor', cucumber(options));
};
