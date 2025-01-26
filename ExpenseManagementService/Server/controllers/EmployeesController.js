/* eslint-disable no-undef */
const EmployeesService = require('../services/Employees.Service');

const GetAllEmployees = async (req, res) => {
  try {
    const employees = await EmployeesService.GetAllEmployees();
    res.status(200).json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching employees' });
  }
};

const GetEmployeeById = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await EmployeesService.GetEmployeeById(id);
    res.status(200).json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching employee' });
  }
};

const CreateEmployee = async (req, res) => {
  try {
    const employeeData = req.body;
    const employee = await EmployeesService.CreateEmployee(employeeData);
    res.status(201).json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating employee' });
  }
};

const UpdateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const employeeData = req.body;
    const employee = await EmployeesService.UpdateEmployee(id, employeeData);
    res.status(200).json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error updating employee' });
  }
};

const DeleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await EmployeesService.DeleteEmployee(id);
    res.status(200).json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deleting employee' });
  }
};

module.exports = {
  GetAllEmployees,
  GetEmployeeById,
  CreateEmployee,
  UpdateEmployee,
  DeleteEmployee
};
