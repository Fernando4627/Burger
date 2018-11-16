const mysql = require("mysql");

let DB = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});

module.exports = db;