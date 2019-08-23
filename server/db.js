const mysql = require('mysql');
const config = require('./config');

// const db = config.dbConfigValues;

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'foris'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Mysql connected...');
});

module.exports = connection;
