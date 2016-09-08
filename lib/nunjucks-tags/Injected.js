var content = require('../content');

/**
 * Prepend the content of this tag to the name register, then output the register.
 */
function Injected() {
  this.tags = ['injected'];

  this.parse = function(parser, nodes, lexer) {
    var token = parser.nextToken();

    var nodeList = new nodes.NodeList();
    nodeList.addChild(parser.parsePrimary());

    parser.advanceAfterBlockEnd(token.value);

    var body = parser.parseUntilBlocks('endinjected');
    parser.advanceAfterBlockEnd();

    return new nodes.CallExtension(this, 'run', nodeList, [body]);
  };

  this.run = function(context, name, body) {
    content.add(context, name, body());
    return content.get( context, name).join('\n');
  };

}

module.exports = Injected;

