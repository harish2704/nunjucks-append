var content = require('../content');

/**
 * Append the content of this tag to the named register.
 */
function Inject() {
  this.tags = ['inject'];

  this.parse = function(parser, nodes, lexer) {
    var token = parser.nextToken();

    var nodeList = new nodes.NodeList();
    nodeList.addChild(parser.parsePrimary());

    parser.advanceAfterBlockEnd(token.value);

    var body = parser.parseUntilBlocks('endinject');
    parser.advanceAfterBlockEnd();

    return new nodes.CallExtension(this, 'run', nodeList, [body]);
  };

  this.run = function(context, name, body) {
    content.add( context, name, body());
  };
}

module.exports = Inject;
