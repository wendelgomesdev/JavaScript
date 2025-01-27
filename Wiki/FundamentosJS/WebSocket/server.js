// server.js
const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 9090 });

let value = 0;

server.on('connection', (ws) => {
    console.log('Client connected');
    
    // Envia o valor inicial
    ws.send(JSON.stringify({ value }));
    
    // Simula mudanças na variável a cada 2 segundos
    setInterval(() => {
        value += 1;
        ws.send(JSON.stringify({ value }));
    }, 2000);

    ws.on('close', () => console.log('Client disconnected'));
});