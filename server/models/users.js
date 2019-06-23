const db = require('../db');

exports.createNewUser = (
  UID,
  phone,
  password,
  username,
  isActive,
  isBlocked,
  isVerified,
  isHonors,
  schoolEmail,
  personalEmail,
  timeCreated,
  locationCreated,
  done
) => {
  const sql = `
    INSERT INTO users(id, phone, password, username,
      school_email, personal_email, location_created)
    VALUES (${UID}, ${phone}, ${password}, ${username},
    ${schoolEmail}, ${personalEmail}, ${locationCreated})`;

  db.get().query(sql, (err, result) => {
    if (err) done(err);
    done(null, result.insertId);
  });
};
