const express = require("express");
const SocketServer = require("ws").Server;
const uuidv4 = require("uuid/v4");

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
  // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static("public"))
  .listen(PORT, "0.0.0.0", "localhost", () =>
    console.log(`Listening on ${PORT}`)
  );

// Create the WebSockets server
const wss = new SocketServer({ server });
console.log("clients", wss.clients);

wss.broadcast = function broadcast(msg) {
  wss.clients.forEach(function each(client) {
    client.send(JSON.stringify(msg));
  });
};

const newClientNotification = {
  id: uuidv4(),
  type: "postMessage",
  content: "Anonymous user has joined the chat.",
  username: "** New User **"
};

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on("connection", ws => {
  console.log("Client connected");

  wss.broadcast(wss.clients.size);
  wss.broadcast(newClientNotification);

  ws.on("message", data => {
    const type = JSON.parse(data);
    type.id = uuidv4();
    wss.clients.forEach(function each(client) {
      const newData = JSON.stringify(type);
      if (client.readyState === ws.OPEN) {
        client.send(newData);
        // client.send(numberOfUsers);
      }
    });
  });

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on("close", () => {
    wss.broadcast(wss.clients.size);
    console.log("Client disconnected");
  });
});
