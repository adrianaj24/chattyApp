import React, { Component } from "react";

class Chatbar extends Component {
  constructor(props) {
    super(props);
    this._handleKeyPress = this._handleKeyPress.bind(this);
    this.userEntered = this.userEntered.bind(this);
    this.state = { newUser: props.username };
  }

  // on keypress enter, ths newUser becomes the value in the input username field thru the userEntered fu
  userEntered(event) {
    this.setState({ newUser: event.target.value });
  }

  _handleKeyPress(e) {
    const messageInput = e.target.value;
    // let username = this.refs.username.value;
    if (e.key === "Enter") {
      console.log("this");
      this.props.sendMessage(messageInput, this.state.newUser);
    }
  }
  render() {
    return (
      <footer className="chatbar">
        {this.props.username}
        <input
          className="chatbar-username"
          value={this.state.newUser}
          onChange={this.userEntered}
          // {event => this.setState({ newUser: event.target.value })}
          //   onKeyPress={this._handleKeyPress}
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
