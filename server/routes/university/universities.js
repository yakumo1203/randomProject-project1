const express = require('express');
const con = require('../../db');
const app = express();

const recommendationEngine = (uid, callback) => {
  // fill in with actual recommendation engine
  // temporary query for now
  const sql = 'SELECT * FROM universities;';
  con.query(sql, (err, result) => {
    if (err) throw err;
    callback(result);
  });
};

const jumpBackInQuery = (uid, callback) => {
  // fill in with actual jump back in engine on a later date
  const sql = 'SELECT TOP 5 * FROM universities ORDER BY last_time_seen WHERE have_seen = 1 ';
  con.query(sql, (err, result) => {
    if (err) throw err;
    callback(result);
  });
};

app.get('/for_you/:uid', (req, res, next) => {
  const uid = req.params.uid;
  recommendationEngine(uid, (result) => {
    res.render('for_you', {
      university_name: result.university_name,
      university_page_picture_url: result.university_page_picture_url
    });
  });
});

app.get('/jump_back_in/:uid', (req, res, next) => {
  const uid = req.params.uid;
  jumpBackInQuery(uid, (result) => {
    res.render('jump_back_in', {
      university_name: result.university_name,
      university_page_picture_url: result.university_page_picture_url
    });
  });
});

app.get('/jump_back_in/:uid', (req, res, next) => {
  const uid = req.params.uid;
  const queryText = `SELECT `
})

module.exports = app;
