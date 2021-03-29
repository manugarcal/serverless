/* importar todos los package que usaremos */
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const meals = require('./routes/meals')
const orders = require('./routes/orders')

/* llamar a los metodos que usaremos para nuestra aplicacion de back end */
const app = express()
app.use(bodyParser.json())
app.use(cors())

/* conexion con el servidor de base de datos que creamos en mongo atlas */
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})

app.use('/api/meals', meals)
app.use('/api/orders', orders)

module.exports = app