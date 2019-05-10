import React, { Component } from "react";
import Chatbar from "./ChatBar.jsx";
import MessageList from "./MessageList.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.socket = new WebSocket("ws://localhost:3001");
    this.state = {
      currentUser: { name: "Anonymous" },
      socket: this.socket,
      messages: [],
      userJoining: null,
      onlineUsers: null
    };
    this.sendMessage = this.sendMessage.bind(this);
  }

  setUsername = user => {
    if (!user) {
      this.setState({ currentUser: { name: "Anonymous" } });
    } else {
      this.setState({ currentUser: { name: user } });
    }
  };

  componentDidMount() {
    console.log("socket1", this.socket);
    this.socket.onopen = event => {
      console.warn("socket connection established");
      this.socket.onmessage = event => {
        const receivedMessage = JSON.parse(event.data);
        console.log("this is the message", receivedMessage);
        const newMessageList = this.state.messages.concat(receivedMessage);

        this.setState({ messages: newMessageList });
        if (Number.isInteger(receivedMessage)) {
          console.log("RM2", receivedMessage);
          const onlineUsers = receivedMessage;
          this.setState({ onlineUsers });
        }
        if (receivedMessage.type === "incomingNotification") {
          const userJoining = receivedMessage.content;
          this.setState({ userJoining });
        }
      };

      console.log(event);
    };
  }
  //receives the message from chatbar handlekeypress then sends to server
  sendMessage = (content, type) => {
    const message = {
      type: type,
      username: this.state.currentUser.name,
      content: content
    };
    console.log(message.username);
    this.state.socket.send(JSON.stringify(message));
    console.log(JSON.stringify(message));
  };

  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">
            Chatty
          </a>
          <div className="online-users">
            Online Users: {this.state.onlineUsers}
          </div>
        </nav>
        <Chatbar
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
