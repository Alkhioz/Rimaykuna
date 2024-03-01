const { HierarchyNode } = require('hierarchical-node-structure');
const Display = require('../display/display');
const { CheckTypeMismatch } = require('../utils/validation.util');
const createDatabase = (name) => {
    const errors = [];
    if (CheckTypeMismatch(name, 'string')) errors.push('A database needs a valid name');
    if (errors.length > 0) {
        Display.error(errors);
        return null;
    }
    return new HierarchyNode(name);
}

module.exports = createDatabase;