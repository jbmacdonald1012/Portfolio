/* eslint-disable no-undef */
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const port = process.env.PORT || 5000;

const app = express();

const corsOptions = {
  origin: 'http://localhost:5173'
};

app
  .use(cors(corsOptions))
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use('/', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
