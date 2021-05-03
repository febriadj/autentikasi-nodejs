'use strict'

const db = require('../config/db')

exports.initialView = function(req, res, next) {
  if (!req.session.user) {
    return res.status(403).render('auth/login');
  }

  const sql = 'SELECT username, email FROM users WHERE username = ?';

  db.query(sql, [req.session.user], (err, result) => {
    if (err) return res.status(500).json(err);

    res.status(200).render('index', {
      profile: result[0]
    })
  })
}