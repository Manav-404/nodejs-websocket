const WebSocketServer = require("./ws")
const PORT = 4000
const server = new WebSocketServer({port: PORT})

server.on('headers', ({headers})=>console.log(headers))

server.on('data', (message, reply) => {
    if (!message) return;
  
    const data = JSON.parse(message);
    return reply({pong: data})
  });
server.listen(()=>{
    console.log(`WebSocket server is listening on ${PORT}`)
})