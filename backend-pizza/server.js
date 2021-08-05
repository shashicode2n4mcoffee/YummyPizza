const express = require('express')
const Pizza = require('./models/pizzaModel')

const app = express()
const db = require('./db')

const pizzaRoute = require('./routes/pizzasRoute')

// require('dotenv').config()
app.use(express.json())
app.use('/api/pizzas/', pizzaRoute)
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('hello from simple server :)')
})

// app.get('/getPizzas', (req, res) => {
//   Pizza.find({}, (err, docs) => {
//     if (err) {
//       console.log(err)
//     } else {
//       res.send(docs)
//     }
//   })
// })

app.listen(port, () =>
  console.log('> Server is up and running on port : ' + port)
)
