const express = require('express');
const dovenv = require('dotenv');
const { json } = require('express');

dovenv.config({ path: './config/config.env' });

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  () => `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
);

app.get('/api/v1/bootcamps', (req, res) => {
  res.status(200).json({
    success: true,
    msg: 'Show all bootCamps'
  })
})

app.get('/api/v1/bootcamps/:id', (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Get bootCamp ${req.params.id}`
  })
})

app.post('/api/v1/bootcamps', (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Created new bootCamp`
  })
})

app.put('/api/v1/bootcamps/:id', (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Update bootCamp ${req.params.id}`
  })
})

app.delete('/api/v1/bootcamps/:id', (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Delete bootCamp ${req.params.id}`
  })
})
