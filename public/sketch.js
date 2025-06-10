const socket = io.connect({ reconnection: false })

function setup() {
  createCanvas(500, 500)
  background(150)
  socket.on('drawing',function(mx,my){
    ellipse(mx,my,20)
  })

}

function mouseDragged() {
  ellipse(mouseX, mouseY, 20)
  socket.emit('drawing',mouseX,mouseY)

}


