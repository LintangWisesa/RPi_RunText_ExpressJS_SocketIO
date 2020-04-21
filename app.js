var express = require('express')
var socket = require('socket.io')

var app = express()
app.use(express.static('public'))

// activate server 
var server = app.listen(1234, ()=>{
    console.log('Server run @port 1234!')
})

// socket setup
var io = socket(server)

io.on('connection', (socket)=>{
    console.log('Made socket connection', socket.id)
    
    socket.on('chat', (data)=>{
        io.sockets.emit('chat', data)
    })

    // broadcast message to another client
    socket.on('typing', (data)=>{
        socket.broadcast.emit('typing', data)
    })
})