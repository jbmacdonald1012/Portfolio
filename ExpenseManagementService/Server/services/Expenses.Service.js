/* eslint-disable no-undef */
const { pool } = require('../database/connection');

const GetAllExpenses = async () => {
  const query = `
    SELECT
      e.expense_id,
      e.amount,
      e.date_incurred,
      e.date_submitted,
      e.status,
      e.notes,
      CONCAT(emp.first_name, ' ', emp.last_name) AS employee_name,
      v.vendor_name,
      c.category_name
    FROM expenses AS e
    JOIN employees AS emp ON e.employee_id = emp.employee_id
    LEFT JOIN vendors AS v ON e.vendor_id = v.vendor_id
    JOIN expense_categories AS c ON e.category_id = c.category_id
    ORDER BY e.expense_id;
  `;
  const result = await pool.query(query);
  return result.rows;
};

const GetExpenseById = async (expenseId) => {
  const query = `
      SELECT
        e.expense_id,
        e.amount,
        e.date_incurred,
        e.date_submitted,
        e.status,
        e.notes,
        CONCAT(emp.first_name, ' ', emp.last_name) AS employee_name,
        v.vendor_name,
        c.category_name
      FROM expenses AS e
      JOIN employees AS emp ON e.employee_id = emp.employee_id
      LEFT JOIN vendors AS v ON e.vendor_id = v.vendor_id
      JOIN expense_categories AS c ON e.category_id = c.category_id
      WHERE e.expense_id = $1
    `;

  const result = await pool.query(query, [expenseId]);
  return result.rows[0];
};

const CreateExpense = async (expenseData) => {
  const {
    employeeName,
    vendorName,
    categoryName,
    amount,
    date_incurred,
    date_submitted,
    status,
    notes
  } = expenseData;

  const employeeId = await GetEmployeeId(employeeName);
  const vendorId = await GetOrCreateVendorId(vendorName);
  const categoryId = await GetOrCreateCategoryId(categoryName);

  const insertQuery = `
        INSERT INTO expenses (
          employee_id, vendor_id, category_id, amount,
          date_incurred, date_submitted, status, notes
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING *
      `;
  const values = [
    employeeId,
    vendorId,
    categoryId,
    amount,
    date_incurred,
    date_submitted || null,
    status || 'Pending',
    notes || null
  ];

  const result = await pool.query(insertQuery, values);
  return result.rows[0];
};

const UpdateExpenseByNames = async (expenseId, updateData) => {
  // 1. Get or create IDs from names
  const employeeId = await GetEmployeeId(updateData.employeeName);
  const vendorId = await GetOrCreateVendorId(updateData.vendorName);
  const categoryId = await GetOrCreateCategoryId(updateData.categoryName);

  // 2. Perform the UPDATE
  const updateQuery = `
      UPDATE expenses
      SET
        employee_id = $1,
        vendor_id = $2,
        category_id = $3,
        amount = $4,
        date_incurred = $5,
        date_submitted = $6,
        status = $7,
        notes = $8
      WHERE expense_id = $9
      RETURNING *;
    `;

  const values = [
    employeeId,
    vendorId,
    categoryId,
    updateData.amount,
    updateData.date_incurred,
    updateData.date_submitted || null,
    updateData.status || 'Pending',
    updateData.notes || null,
    expenseId
  ];

  const result = await pool.query(updateQuery, values);
  return result.rows[0] || null; // If no row found, return null
};

const DeleteExpenseById = async (expenseId) => {
  const deleteQuery = `
      DELETE FROM expenses
      WHERE expense_id = $1
      RETURNING expense_id;
    `;
  const result = await pool.query(deleteQuery, [expenseId]);
  return result.rowCount > 0;
};

//#region Helper functions

async function GetEmployeeId(fullName) {
  const [firstName, lastName] = fullName.split(' ');

  let result = await pool.query(
    `SELECT employee_id FROM employees WHERE first_name = $1 AND last_name = $2`,
    [firstName, lastName]
  );
  if (result.rowCount <= 0) {
    console.error(`Employee not found: ${fullName}`);
    return null;
  }
  return result.rows[0].employee_id;
}

async function GetOrCreateVendorId(vendorName) {
  let result = await pool.query(`SELECT vendor_id FROM vendors WHERE vendor_name = $1`, [
    vendorName
  ]);
  if (result.rowCount > 0) {
    return result.rows[0].vendor_id;
  }

  result = await pool.query(
    `INSERT INTO vendors (vendor_name)
       VALUES ($1)
       RETURNING vendor_id`,
    [vendorName]
  );
  return result.rows[0].vendor_id;
}

async function GetOrCreateCategoryId(categoryName) {
  let result = await pool.query(
    `SELECT category_id FROM expense_categories WHERE category_name = $1`,
    [categoryName]
  );
  if (result.rowCount > 0) {
    return result.rows[0].category_id;
  }

  result = await pool.query(
    `INSERT INTO expense_categories (category_name)
       VALUES ($1)
       RETURNING category_id`,
    [categoryName]
  );
  return result.rows[0].category_id;
}
//#endregion

module.exports = {
  GetAllExpenses,
  GetExpenseById,
  CreateExpense,
  UpdateExpenseByNames,
  DeleteExpenseById
};
