/* eslint-disable no-undef */
const { Router } = require('express');
const router = Router();
const EmployeesController = require('../controllers/EmployeesController');

// GET all employees
router.get('/', EmployeesController.GetAllEmployees);

// GET employee by id
router.get('/:id', EmployeesController.GetEmployeeById);

// CREATE employee
router.post('/', EmployeesController.CreateEmployee);

// Update employee
router.put('/:id', EmployeesController.UpdateEmployee);

// DELETE employee
router.delete('/:id', EmployeesController.DeleteEmployee);

module.exports = router;
