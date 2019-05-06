const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

var addToDictionary = function(callback) {
  connection.query(`INSERT INTO dictionary (english, turkish) VALUES (?, ?)`, function(err, results) {
    callback(err, results);
  });
}

var getAllWords = function(callback) {
  connection.query(`SELECT * FROM dictionary`, function(err, results) {
    callback(err, results);
  });
}

module.exports = {
  addToDictionary,
  getAllWords
}

