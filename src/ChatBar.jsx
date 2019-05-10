import React, { Component } from "react";

class Chatbar extends Component {
  constructor(props) {
    super(props);
    this._handleKeyPress = this._handleKeyPress.bind(this);
    this._handleKeyUser = this._handleKeyUser.bind(this);
    // this.state = { newUser: props.username };
  }

  // on keypress enter, ths newUser becomes the value in the input username field thru the userEntered function
  _handleKeyUser(event) {
    let newUser = event.target.value;
    if (event.key === "Enter") {
      if (!newUser) {
        newUser = "Anonymous";
      }
      if (newUser !== this.props.username) {
        this.props.setName(newUser);
        console.log("newuser", newUser);
        this.props.sendMessage(
          `${this.props.username} changed their username to: ${newUser}`,
          "postNotification"
        );
      }
    }
  }
  //created message and send to app.jsx with username
  _handleKeyPress(e) {
    const messageInput = e.target.value;
    // let username = this.refs.username.value;
    if (e.key === "Enter") {
      if (!messageInput) {
        return;
      }
      e.target.value = "";
      console.log("message-sent");
      this.props.sendMessage(messageInput, "postMessage");
    }
  }
  render() {
    return (
      <footer className="chatbar">
        <input
          className="chatbar-username"
          onKeyPress={this._handleKeyUser}
          placeholder="Your Name (Optional)"
        />
        <input
          className="chatbar-message"
          onKeyPress={this._handleKeyPress}
          placeholder="Type a message and hit ENTER"
        />
      </footer>
    );
  }
}

export default Chatbar;
