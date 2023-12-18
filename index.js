const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT
const cors = require('cors')
const helmet = require('helmet')

// for give acces receive data in express from outside
app.use(express.urlencoded({ extended: false }))
// for tell the express the data is json
app.use(express.json())

// using cors for give acces data in another domain
app.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
  }))

// use helmet for security headers
app.use(helmet())

// import router/endpoint after separate code from index

const moviesRouters = require('./routers/movies')
const userRouters = require('./routers/users')
const cinemasRouters = require('./routers/cinemas')

// call endpoint

app.use(moviesRouters)
app.use(userRouters)
app.use(cinemasRouters)

// default response harus dibawah call endpoint biar ga nimpa fetch data

app.use('/', (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'API runnig well',
    data: []
  })
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
