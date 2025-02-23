/* eslint-disable no-undef */
const { pool } = require('../database/connection');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const createUser = async (registrationData) => {

  const { firstName, lastName, username, email, password } = registrationData;
  
  // Hash the password
  const hashedPassword = await bcrypt.hash(String(password), saltRounds);
  
  const query = `
    INSERT INTO users (first_name, last_name, username, email, password)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING id, first_name, last_name, username, email, created_at
  `;
  const values = [firstName, lastName, username, email, hashedPassword];

  const result = await pool.query(query, values);
  return result.rows[0];
};

const findUserByEmail = async (email) => {
  const query = 'SELECT * FROM users WHERE email = $1';
  const result = await pool.query(query, [email]);
  return result.rows[0];
};

const verifyPassword = async (plainTextPassword, hashedPassword) => {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
};

module.exports = {
  createUser,
  findUserByEmail,
  verifyPassword
};
