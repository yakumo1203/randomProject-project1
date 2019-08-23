  const express = require('express');
const con = require('../../db');

const router = express.Router();

const universityMajorsQuery = (university_id, callback) => {
  const sql = `SELECT * FROM university_majors LEFT JOIN university_majors_tags
    ON university_majors.university_id = university_majors_tags.university_id
    WHERE university_id = ?;`;
  con.query(sql, (err, result) => {
    if (err) throw err;
    callback(result);
  });
};

router.get('/home/:university_id/:uid', (req, res, next) => {
  const university_id = req.params.university_id;
  const uid = req.params.uid;
  const sql = `
    SELECT * FROM universities LEFT JOIN university_application_info
    ON universities.id = university_application_info.university_id
    WHERE id = ?;`;
  con.query(sql, [university_id], (err, result) => {
    if (err) throw err;
    res.render('university_page_home', {
      university_id: result.id,
      university_name: result.university_name,
      university_summary_text: result.summary_text,
      university_academic_ranking: result.academic_ranking,
      university_student_number: result.student_number,
      university_website_url: result.website_url,
      university_is_viewed: result.is_viewed,
      university_page_picture_url: result.university_page_picture_url,
      university_have_seen: result.have_seen,
      university_last_time_seen: result.last_time_seen
    });
  });
});

router.get('/facilities/:university_id', (req, res, next) => {
  const university_id = req.params.university_id;
  const sql = `
    SELECT * FROM university_facilities WHERE university_id = ?;`;
  con.query(sql, [university_id], (err, result) => {
    if (err) throw err;
    res.render('university_page_facilities', {
      summary_text: result.summary_text
    });
  });
});

// Figure out how to render a list of items

// router.get('/majors/:university_id', (req, res, next) => {
//   const university_id = req.params.university_id;
//   universityMajorsQuery(university_id, (result) => {
//     res.render('university_page_majors', {
//
//     })
//   })
// });

router.get('/students/:university_id/:uid', (res, req, next) => {
  const university_id = req.params.university_id;
  const uid = req.params.uid;
  const sql = `
    SELECT * FROM university_students WHERE university_id = ?;`;
  con.query(sql, [university_id], (err, result) => {
    if (err) throw err;
    res.render('unversity_students', {
      university_student_user_id: result.user_id;
    });
  });
});

module.exports = router;
