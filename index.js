const WebSocketServer = require("ws").Server;

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (ws, request) => {
    console.log("Connection established");
    console.log(request.url);
    ws.on("message", (message) => {
        console.log(`Received message => ${message}`);
        ws.send(`You sent => ${message}`);
    });
});