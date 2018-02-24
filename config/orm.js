const connection = require("./connection.js");

// Object for all our SQL statement functions.
var orm = {
    selectAll: function (table, onResult) {
        const query = 'SELECT * FROM ??';
        connection.query(query, [table], function (err, result) {
            onResult(err, result);
        })
    },
    insertInto: function (table, columns, values, onResult) {
        const query = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(query, [table, columns, values], function (err, result) {
           if (err) throw err;
            onResult(err, result);
        })
    },
    update: function (table, column, value, id, onResult) {
        const query = 'UPDATE ?? SET ?? = ? WHERE id = ?'
        connection.query(query, [table, column, value, id], function (err, result) {
            console.log(err)
            onResult(err, result);
        })
    }
}


// Export the orm object for the model
module.exports = orm;



