const express = require('express');
const dovenv = require('dotenv');
const logger = require('./middleware/logger');
// router files
const bootCamps = require('./router/bootcamps')
var morgan = require('morgan');
dovenv.config({ path: './config/config.env' });

const app = express();


// Set middleware
if(process.env.NODE_ENV='development') {
  app.use(morgan('dev'));
}

// Mount routers
app.use('/api/v1/bootcamps', bootCamps);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  () => `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
);

