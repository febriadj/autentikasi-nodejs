'use strict'

const 
  bcrypt = require('bcryptjs')
, db = require('../config/db');

exports.loginPost = async function (req, res, next) {
  const { nameOrEmail, password } = req.body;
  const sql = 'SELECT * FROM users WHERE username = ? OR email = ?';

  await db.query(sql, [nameOrEmail, nameOrEmail], (err, result) => {
    if (err) return res.status(500).json(err);
    
    try {      
      if (!result[0]) {
        throw 'username atau email tidak ditemukan';
      }

      if (bcrypt.compareSync(password, result[0].password) == false) {
        throw 'password pengguna salah';
      }
  
      req.session.user = result[0].username;
      res.status(301).redirect('/');
    }
    catch(err) {
      res.status(401).render('auth/login', {
        message: err
      })
    }
  })
}