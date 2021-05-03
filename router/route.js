'use strict'

const
  router = require('express').Router()
, bcrypt = require('bcryptjs');

// router login
const { loginGet, loginPost } = require('../controllers/login');
router.route('/login').get(loginGet).post(loginPost);

// router register
const { registerGet, registerPost } = require('../controllers/register');
router.route('/register').get(registerGet).post(registerPost);

module.exports = router;