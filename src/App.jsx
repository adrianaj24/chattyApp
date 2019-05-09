import React, { Component } from "react";
import Chatbar from "./ChatBar.jsx";
import MessageList from "./MessageList.jsx";

const URL = "ws://localhost:3001";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: { name: "" },
      socket: null,
      messages: []
    };
  }

  setUsername = user => {
    this.setState({ currentUser: { name: user } });
  };

  // handleChange = event => {
  //   console.log("event", event);
  //   this.setState({ currentUser: "" });
  //   // console.log("value", value);
  // };
  componentDidMount() {
    const socket = new WebSocket("ws://localhost:3001");
    socket.onopen = function(event) {
      console.warn("socket connection established");
    };

    this.setState({ socket: socket });
    socket.onmessage = event => {
      const receivedMessage = JSON.parse(event.data);
      const newMessageList = this.state.messages.concat(receivedMessage);

      this.setState({ messages: newMessageList });
    };
  }

  sendMessage = (content, username) => {
    console.log("username", username);
    const message = {
      type: "postMessage",
      // id: id,
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
          // ={this.state.value}
          // onChange={this.handleChange}
          username={this.state.currentUser.name}
          setName={this.setUsername}
          sendMessage={this.sendMessage}
        />
        <MessageList messages={this.state.messages} />
      </div>
    );
  }
}

export default App;
