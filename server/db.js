const mysql = require('mysql');
const async = require('async');
const config = require('./config');

const PRODUCTION_DB = 'production_db';
const TEST_DB = 'test_db';

exports.MODE_TEST = 'mode_test';
exports.MODE_PRODUCTION = 'mode_production';

const state = {
  pool: null,
  mode: null
};

const db = config.dbCongigValues;

exports.connect = (mode, done) => {
  state.pool = mysql.createPool({
    host: db.host,
    user: db.user,
    password: db.password,
    database: mode === exports.MODE_PRODUCTION ? PRODUCTION_DB : TEST_DB
  });

  state.mode = mode;
  done();
};

exports.get = () => state.pool;

exports.fixtures = (data, done) => {
  const pool = state.pool;
  if (!pool) return done(new Error('Missing database connection...'));

  const names = Object.keys(data.tables);
  async.each(names, (name, cb) => {
    async.each(data.tables[name], (row, cb) => {
      const keys = Object.keys(row);
      const values = keys.map((key) => `'${row[key]}'`);

      pool.query(
        `INSERT INTO ${name} (${keys.join(',')}) VALUES (${values.join(',')})`,
        cb
      );
    }, cb);
  }, done);
};

exports.drop = (tables, done) => {
  const pool = state.pool;
  if (!pool) return done(new Error('Missing database connection...'));

  async.each(tables, (name, cb) => {
    pool.query(`DELETE * FROM ${name}`, cb);
  }, done);
};
