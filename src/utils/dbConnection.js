const mysql = require("mysql");

var config = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "22kl3b5p",
  database: "practica",
  port: 3306,
});

config.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = config;
