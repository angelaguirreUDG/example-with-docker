const express = require('express')
const morgan = require('morgan')
const app = express()

app.set('json spaces', 2)

app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(require('./routes/index'))
app.use('/api/movies', require('./routes/movies'))

module.exports = app