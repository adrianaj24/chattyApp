import React, { Component } from "react";
import Chatbar from "./ChatBar.jsx";
import MessageList from "./MessageList.jsx";

const URL = "ws://localhost:3001";

function generateRandomString() {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 7; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: { name: "Adriana" },
      socket: null,
      messages: []
    };
  }
  componentDidMount() {
    const socket = new WebSocket("ws://localhost:3001");
    socket.onopen = function(event) {
      console.warn("socket connection established");
    };

    this.setState({ socket: socket });
  }

  sendMessage = (content, username) => {
    console.log("content", content);
    const message = {
      type: "postMessage",
      id: generateRandomString(),
      username: username,
      content: content
    };
    this.state.socket.send(JSON.stringify(message));
    console.log(JSON.stringify(message));
  };

  render() {
    return (
      <div>
        <Chatbar
          currentUser={this.state.currentUser.name}
          sendMessage={this.sendMessage}
        />
        <MessageList messages={this.state.messages} />
      </div>
    );
  }
}

export default App;
