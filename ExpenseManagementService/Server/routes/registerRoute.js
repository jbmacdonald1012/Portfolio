/* eslint-disable no-undef */
const express = require('express');
const loginController = require('../controllers/LoginController.js');
const router = express.Router();

router.post('/', loginController.registerUser);

module.exports = router;