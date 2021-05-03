'use strict'

const
  bcrypt = require('bcryptjs')
, db = require('../config/db');

exports.registerGet = function(req, res, next) {
  res.status(200).render('auth/register', {
    message: undefined
  })
}

exports.registerPost = function(req, res, next) {
  const { username, email, password } = req.body;

  const hashPass = bcrypt.hashSync(password, 10);
  const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';

  db.query(sql, [username, email, hashPass], err => {
    try {
      if (err) throw 'username atau email sudah terpakai';
      
      res.status(301).redirect('/login');
    }
    catch(err) {
      res.status(400).render('auth/register', {
        message: err
      })
    }
  })
}