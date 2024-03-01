const { HierarchyNode } = require('hierarchical-node-structure');
const { ErrorObjectKey } = require('../utils/validation.util');
const Display = require('../display/display');
const createProject = (data) => {
    const errors = [];
    if (ErrorObjectKey(data)) errors.push('Cant create an empty project');
    if (ErrorObjectKey(data, 'key')) errors.push('A project needs a key');
    if (ErrorObjectKey(data, 'name')) errors.push('A project needs a name');
    if (errors.length > 0) {
        Display.error(errors);
        return null;
    }
    return new HierarchyNode(data);
}

module.exports = createProject;