
var sqlite3 = require('sqlite3');

var db = new sqlite3.Database('./var/db/todos.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the todos database.');
});

module.exports = db;
