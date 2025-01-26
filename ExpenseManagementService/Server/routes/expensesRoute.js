/* eslint-disable no-undef */
const { Router } = require('express');
const router = Router();
const ExpensesController = require('../controllers/ExpensesController');

//GET all expenses
ExpensesController.GetAllExpenses;

//GET expense by id
ExpensesController.GetExpenseById;

//CREATE expense
ExpensesController.CreateExpense;

//Update expense
ExpensesController.UpdateExpense;

//DELETE expense
ExpensesController.DeleteExpense;

module.exports = router;
