// import MySQL connection
var connection = require("./connection");

// objection for all SQL statements
var orm = {
    // selectAll
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // insertOne
    insertOne: function(tableInput, cols, vals, cb) {
        // INSERT INTO burgers (burger_name, devoured) VALUES ("yummy burger", false);
        var queryString = "INSERT INTO " + tableInput;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += vals;
        queryString += ") ";
        console.log(queryString);
        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // updateOne
    updateOne: function( cb) {
        // UPDATE burgers SET {burger name, devoured true } WHERE devoured = false 
    }


}


// * `updateOne()`

// export to burger.js
module.exports = orm;