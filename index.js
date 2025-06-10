let express = require('express')

let socket = require('socket.io')

let app = express()

let ids = []

app.use(express.static('public'))

let server = app.listen(3000, function() {

  console.log('server running')

})

let io = socket(server)

io.on('connection',function(socket){
  ids.push(socket.id)
  //console.log(socket.id)
  console.log(ids)
  socket.on('drawing',function(mx,my){
    //console.log(mx,my)
    let word = prompt('enter: ')
    
    socket.broadcast.emit('drawing',mx,my)
    
  })

})
