const mysql = require('mysql');
const config = require('./config');

const db = config.dbConfigValues;

const connection = mysql.createConnection({
  host: db.host,
  user: db.user,
  password: db.password,
  database: db.database
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Mysql connected...');
});

module.exports = connection;
