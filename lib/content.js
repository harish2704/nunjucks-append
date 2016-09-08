module.exports = {

  /**
   * Prepend content to the named register.
   *
   * @param {String} name Name of the output register.
   * @param {String} content Content to be prepended.
   */
  add: function(register, name, content) {
    name = '__njkApnd__' + name;
    register[name] = register[name] || [];
    register[name].unshift( content );
  },

  /**
   * Get the content for the named register.
   *
   * @param {String} name Name of the register.
   * @return {Array<String>} The content of the register.
   */
  get: function(register, name) {
    name = '__njkApnd__' + name;
    return register[name];
  }
};
