'use strict'

const router = require('express').Router()

// router login dan initial view
const { loginPost } = require('../controllers/login');
const { initialView } = require('../controllers/initial_view')
router.route('/').get(initialView).post(loginPost);

// router register
const { registerGet, registerPost } = require('../controllers/register');
router.route('/register').get(registerGet).post(registerPost);

const { logout } = require('../controllers/logout');
router.get('/logout', logout);

module.exports = router;