/* eslint-disable no-undef */
const jwt = require('jsonwebtoken');
const LoginService = require('../services/Login.Service.js');
const dotenv = require('dotenv');

dotenv.config();

const registerUser = async (req, res) => {
  try {
    const registrationData = req.body;
    
    // Create the user via the service
    const newUser = await LoginService.createUser(registrationData);

    // Generate JWT token
    const token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    });

    return res.status(201).json({ token, user: newUser });
  } catch (error) {
    console.error('Error in registerUser:', error);
    return res.status(500).json({ error: 'Registration failed.' });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const existingUser = await LoginService.findUserByEmail(email);
    if (!existingUser) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }

    // Compare passwords
    const isMatch = await LoginService.verifyPassword(password, existingUser.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: existingUser.id }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    });

    // Remove password before sending response
    delete existingUser.password;

    return res.status(200).json({ token, user: existingUser });
  } catch (error) {
    console.error('loginUser error:', error);
    return res.status(500).json({ error: 'Login failed.' });
  }
};

module.exports = {
    registerUser,
    loginUser
};
