/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();

const employeesRoute = require('./employeesRoute');
const expensesRoute = require('./expensesRoute');

router.use('/employees', employeesRoute);
router.use('/expenses', expensesRoute);

module.exports = router;
