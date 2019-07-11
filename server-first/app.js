const mysql = require('mysql');
const express = require('express');
const db = require('./db');

const app = express();
const port = 3000;
const host = '127.0.0.1';

app.use('/comments', require('./controllers/comments'));
app.use('/users', require('./controllers/users'));

db.connect(db.MODE_PRODUCTION, (err) => {
  if (err) {
    console.log('Unable to connect to Mysql...');
    process.exit(1);
  }
  app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
  });
});
