var Inject = require('./lib/nunjucks-tags/Inject'),
  Injected = require('./lib/nunjucks-tags/Injected');

module.exports = {

  /**
   * Add the nunjucks extensions to the given nunjucks environment
   *
   * @param {Object} nunjucksEnvironment The nunjucks environment to extend.
   */
  initialise: function(nunjucksEnvironment) {
    nunjucksEnvironment.addExtension('Inject', new Inject() );
    nunjucksEnvironment.addExtension('Injected', new Injected() );
  }
}
