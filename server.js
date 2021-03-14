const express = require('express');
const dovenv = require('dotenv');

// router files
const bootCamps = require('./router/bootcamps')

dovenv.config({ path: './config/config.env' });

const app = express();

// Mount routers
app.use('/api/v1/bootcamps', bootCamps);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  () => `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
);

