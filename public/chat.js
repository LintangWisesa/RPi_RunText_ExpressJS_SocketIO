// socket io in front end

// Make connection
var socket = io.connect('http://localhost:1234/')
// var socket = io.connect('http://192.168.43.163:1234')

// Get value from html
var message = document.getElementById('message')
var speed = document.getElementById('speed')
var txtcolor = document.getElementById('txtcolor')
var bgcolor = document.getElementById('bgcolor')
var font = document.getElementById('font')

var send = document.getElementById('send')
var output = document.getElementById('output')
var feedback = document.getElementById('feedback')

// emit button click events
send.addEventListener('click', ()=>{
    socket.emit('chat', {
        message: message.value,
        speed: speed.value,
        txtcolor: txtcolor.value,
        bgcolor: bgcolor.value,
        font: font.value,
    })
})

// emit keypress input events: "Andi is typing..."
message.addEventListener('keypress', ()=>{
    socket.emit('typing')
})

// listen for events
socket.on('chat', (data)=>{
    // output.innerHTML += `<p><strong>${data.handle}:</strong>&nbsp;&nbsp;${data.message}</p>`
    output.innerHTML = `
    <marquee scrollamount=${data.speed} 
    style="font-size:250px; font-family:${data.font}; color:${data.txtcolor}; background-color:${data.bgcolor}">
        ${data.message}
    </marquee>
    `
    feedback.innerHTML = ''
})

socket.on('typing', (data)=>{
    // feedback.innerHTML = `<i>${data} is typing...</i>`
    feedback.innerHTML = `<i>User is typing...</i>`
})