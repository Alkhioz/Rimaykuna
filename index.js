const createDatabase = require('./src/factories/database.factory');
const createProject = require('./src/factories/project.factory');
const createWeek = require('./src/factories/week.factory');
const database = createDatabase('database');
const project = createProject({
    key: 'lladui',
    name: 'LLA Digutal UI'
});
const week = createWeek({
    day: '29',
    month: '12',
    year: '2015'
});
const week2 = createWeek();
if(!!project) project.addNode(database);
if(!!week) project.addNode(week);
if(!!week2) project.addNode(week2);

console.log(database);
console.log(week2);