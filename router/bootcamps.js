const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    msg: 'Show all bootCamps'
  })
})

router.get('/:id', (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Get bootCamp ${req.params.id}`
  })
})

router.post('/', (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Created new bootCamp`
  })
})

router.put('/:id', (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Update bootCamp ${req.params.id}`
  })
})

router.delete('/:id', (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Delete bootCamp ${req.params.id}`
  })
})

module.exports = router;
