const express = require('express')
const http = require('http')
const { Server } = require('socket.io')
const morgan = require('morgan')
const urlNotFound = require('./src/error/urlNotFound')
const errorHendeler = require('./src/error/errorHendeler')
const indexController = require('./src/controller/indexController')

const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

//home route
app.get('/', (req, res) => {
  res.json({ message: 'Hello World' })
})

//all controller

app.use('/', indexController.router)

//not found
app.use('*', urlNotFound)

//global error hendeler
app.use('*', errorHendeler)

//socket.io
io.on('connection', (socket) => {
  console.log('a user connected')
})

server.listen(3000, () => {
  console.log('listening on *:3000')
})
