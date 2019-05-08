import React, { Component } from "react";

class Chatbar extends Component {
  constructor(props) {
    super(props);
    this._handleKeyPress = this._handleKeyPress.bind(this);
  }

  _handleKeyPress(e) {
    const messageInput = e.target.value;
    const username = this.props.currentUser;
    console.log("currentuser", username);
    if (e.key === "Enter") {
      console.log("this");
      this.props.sendMessage(messageInput, username);
    }
  }
  render() {
    return (
      <footer className="chatbar">
        {this.props.username}
        <input
          name="username"
          className="chatbar-username"
          defaultValue={this.props.currentUser}
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
