// Node.js server setup
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

// Event handler for incoming WebSocket connections
wss.on('connection', (ws) => {
  console.log('Client connected');

  // Event listener for incoming messages from clients
  ws.on('message', (message) => {
    console.log('Received message:', message);

    // Broadcast received message to all connected clients
    wss.clients.forEach((client) => {
        // console.log(client);
        if (client.readyState !== client.OPEN) return;
        client.send(message.toString());
    });
  });
});
