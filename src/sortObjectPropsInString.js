const esprima = require('esprima');
const estraverse = require('estraverse');
const escodegen = require('escodegen');

module.exports = (code) => {
    const codeAst = esprima.parse(code);

    estraverse.replace(codeAst, {
        enter: (node) => {
            if (node.type === 'ObjectExpression') {
                node.properties = node.properties.sort((a, b) => a.key.name > b.key.name);
            }

            return node;
        }
    });

    return escodegen.generate(codeAst);
};
