/* eslint-disable no-undef */
const { Router } = require('express');
const router = Router();
const ExpensesController = require('../controllers/ExpensesController');

//GET all expenses
router.get('/', ExpensesController.GetAllExpenses);

//GET expense by id
router.get('/:id', ExpensesController.GetExpenseById);

//CREATE expense
router.post('/', ExpensesController.CreateExpense);

//Update expense
router.put('/:id', ExpensesController.UpdateExpense);

//DELETE expense
router.delete('/:id', ExpensesController.DeleteExpense);

module.exports = router;
