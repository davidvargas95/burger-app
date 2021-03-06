const mysql = require("mysql");
const util = require("util");
require('dotenv').config();
var connection;

// Establishes the connection to the remote db or the local one.
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: "root",
        password: process.env.DB_CONN,
        database: "burgers_db"
    });
};

connection.connect();

connection.query = util.promisify(connection.query);

module.exports = connection;