const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

var addToDictionary = function(english, turkish, callback) {
  connection.query(`INSERT INTO dictionary (english, turkish) VALUES (?, ?)`, [english, turkish], function(err, results) {
    callback(err, results);
  });
}

var getAllWords = function(callback) {
  connection.query('SELECT * FROM dictionary', function(err, results) {
    callback(err, results);
  });
}

var updateDictionary = function(callback) {
  connection.query('UPDATE dictionary SET turkish = ? WHERE english = (?)', function(err, results) {
    callback(err, results);
  });
}

var deleteFromDictionary = function(callback) {
  connection.query('DELETE FROM dictionary WHERE english = ?', function(err, results) {
    callback(err, results);
  });
}

module.exports = {
  deleteFromDictionary,
  updateDictionary,
  addToDictionary,
  getAllWords
}

