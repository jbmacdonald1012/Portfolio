/* eslint-disable no-undef */
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const port = process.env.PORT || 5000;

const app = express();

app
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use('/', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
