const mongoose = require('mongoose')

let mongoURL = 'mongodb://localhost:27017/mern-pizza-store'

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true })

let db = mongoose.connection

db.on('connected', () => {
  console.log('Mongodb is connected')
})

db.on('error', () => {
  console.log('Mongodb connection failed')
})

module.exports = db
