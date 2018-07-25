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
        // INSERT INTO burgers (burger_name) VALUES ('yummy burger');
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
    // updateOne - not sure if this will work
    updateOne: function(tableInput, cols, vals, condition, cb) {
        // UPDATE burgers SET {devoured: true } WHERE id = id number
        var queryString = "UPDATE " + tableInput;
        queryString += " SET ";
        queryString += "{" + cols + ": " + vals + "}";
        queryString += " WHERE " + condition;
    }


}


// export to burger.js
module.exports = orm;