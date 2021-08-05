const express = require('express')
const pizzaModel = require('../models/pizzaModel')
const router = express.Router()

router.get('/getAllPizzas', async (req, res) => {
  try {
    const pizzas = await pizzaModel.find({})
    res.send(pizzas)
  } catch (error) {
    res.status(400).json({ message: error })
  }
})

module.exports = router
