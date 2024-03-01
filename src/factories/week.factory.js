const { HierarchyNode } = require('hierarchical-node-structure');
const { GetWeekKey } = require('../utils/date.util');
const { ErrorObjectKey } = require('../utils/validation.util');
const Display = require('../display/display');
const createWeek = (date) => {
    if(!date) return new HierarchyNode(GetWeekKey());
    const errors = [];
    if (ErrorObjectKey(date, 'day')) errors.push('You need to provide a day');
    if (ErrorObjectKey(date, 'month')) errors.push('You need to provide a month');
    if (ErrorObjectKey(date, 'year')) errors.push('You need to provide a year');
    if (errors.length > 0) {
        Display.error(errors);
        return null;
    }
    return new HierarchyNode(GetWeekKey(date));
}

module.exports = createWeek;