module.exports = {

  /**
   * Prepend content to the named register.
   *
   * @param {Object} context - variable context
   * @param {String} name - Name of the output register.
   * @param {String} content - Content to be prepended.
   */
    add: function( context, name, content) {
        context.ctx.$rootState = context.ctx.$rootState || {};
        var store = context.ctx.$rootState;
        name = 'njkApnd__' + name;
        if ( store[name]) {
            store[name].unshift(content);
        } else {
            store[name] = [content];
        }
    },

  /**
   * Get the content for the named register.
   *
   * @param {Object} context - variable context
   * @param {String} name Name of the register.
   * @return {Array<String>} The content of the register.
   */
    get: function(context, name) {
        if( !context.ctx.$rootState ){
          return [];
        }
        name = 'njkApnd__' + name;
        return context.ctx.$rootState[name];
    }
};
