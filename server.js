const express = require('express');
const dovenv = require('dotenv');

dovenv.config({ path: './config/config.env' });

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  () => `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
);
