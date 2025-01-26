/* eslint-disable no-undef */
const ExpensesService = require('../services/Expenses.Service');

const GetAllExpenses = async (req, res) => {
  try {
    const expenses = await ExpensesService.GetAllExpenses();
    res.status(200).json(expenses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching expenses' });
  }
};

const GetExpenseById = async (req, res) => {
  try {
    const employeeId = parseInt(req.params.id, 10);
    const expense = await ExpensesService.GetExpenseById(employeeId);
    res.status(200).json(expense);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching expense' });
  }
};

const CreateExpense = async (req, res) => {
  try {
    const expenseData = req.body;
    const expense = await ExpensesService.CreateExpense(expenseData);
    res.status(201).json(expense);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating expense' });
  }
};

const UpdateExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const expenseData = req.body;
    const expense = await ExpensesService.UpdateExpenseByNames(id, expenseData);
    res.status(200).json(expense);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error updating expense' });
  }
};

const DeleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const expense = await ExpensesService.DeleteExpenseById(id);
    res.status(200).json(expense);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deleting expense' });
  }
};

module.exports = {
  GetAllExpenses,
  GetExpenseById,
  CreateExpense,
  UpdateExpense,
  DeleteExpense
};
