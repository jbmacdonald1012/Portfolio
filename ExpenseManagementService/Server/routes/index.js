/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();

const employeesRoute = require('./employeesRoute');
const expensesRoute = require('./expensesRoute');
const loginRoute = require('./loginRoute');
const registerRoute = require('./registerRoute');

router.use('/employees', employeesRoute);
router.use('/expenses', expensesRoute);
router.use('/login', loginRoute);
router.use('/register', registerRoute);

module.exports = router;
