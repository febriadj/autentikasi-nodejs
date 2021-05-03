'use strict'

const db = require('../config/db');

exports.loginGet = async function(req, res, next) {
  res.status(200).render('auth/login', {
    message: undefined
  })
}

exports.loginPost = async function(req, res, next) {
  try {
    const { nameOrEmail, password } = req.body;
    const sql = 'SELECT username FROM users WHERE (username = ? OR email = ?) AND password = ?';
    
    const result = await db.query(sql, [nameOrEmail, nameOrEmail, password])

    if (!result[0]) {
      throw 'pengguna tidak ditemukan'
    }

    res.status(301).redirect('/');
  }
  catch(err) {
    res.status(401).render('auth/login', {
      message: err
    })
  }
}