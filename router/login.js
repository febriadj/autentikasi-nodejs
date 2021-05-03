'use strict'

const db = require('../config/db');

exports.loginGet = async function(req, res, next) {
  try {
    const { email, password } = req.body;
    const sql = await 'SELECT email FROM users WHERE email = ? AND password = ?';
    
    db.query(sql, [email, password], (err, result) => {
      if (err) res.status(500).send(err);

      if (!result[0]) {
        return 'pengguna tidak ditemukan';
      }

      res.status(301).redirect('/')
    })
  }
  catch(err) {
    res.status(401).render('login', {
      message: err
    })
  }
}