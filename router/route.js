'use strict'

const
  router = require('express').Router()
, bcrypt = require('bcryptjs')

// router login
const { loginGet, loginPost } = require('./login')
router.route('/login').get(loginGet).post(loginPost)

module.exports = router;