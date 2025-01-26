/* eslint-disable no-undef */
const { pool } = require('../database/connection');

const GetAllEmployees = async () => {
  const result = await pool.query('SELECT * FROM employees');
  return result.rows;
};

const GetEmployeeById = async (id) => {
  const result = await pool.query('SELECT * FROM employees WHERE employee_id = $1', [id]);
  return result.rows[0];
};

const CreateEmployee = async (employeeData) => {
  const { first_name, last_name, email, pay_frequency, start_date, end_date } = employeeData;

  const result = await pool.query(
    'INSERT INTO employees (first_name, last_name, email, pay_frequency, start_date, end_date) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
    [first_name, last_name, email, pay_frequency, start_date, end_date]
  );
  return result.rows[0];
};

const UpdateEmployee = async (id, employeeData) => {
  const { first_name, last_name, email, pay_frequency, start_date, end_date } = employeeData;

  const result = await pool.query(
    'UPDATE employees SET first_name = $1, last_name = $2, email = $3, pay_frequency = $4, start_date = $5, end_date = $6 WHERE employee_id = $7 RETURNING *',
    [first_name, last_name, email, pay_frequency, start_date, end_date, id]
  );
  return result.rows[0];
};

const DeleteEmployee = async (id) => {
  const result = await pool.query('DELETE FROM employees WHERE employee_id = $1 RETURNING *', [id]);
  return result.rows[0];
};

module.exports = {
  GetAllEmployees,
  GetEmployeeById,
  CreateEmployee,
  UpdateEmployee,
  DeleteEmployee
};
