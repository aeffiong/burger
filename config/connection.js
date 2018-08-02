

// Dependencies
var mysql = require("mysql");
var password = require("./config");

// setting up mysql connection for heroku
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3307,
        user: "root",
        password: password.password,
        database: "burgers_db"
    });
};




// Make connection
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// export for ORM to use
module.exports = connection;