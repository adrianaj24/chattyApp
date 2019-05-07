import React, { Component } from "react";

class Chatbar extends Component {
    render() {
    return (
        <footer className="chatbar">
            {this.props.username}
        <input className="chatbar-username" placeholder="Your Name (Optional)" />
        <input
          className="chatbar-message"
          placeholder="Type a message and hit ENTER"
        />
      </footer>
    );
  }
}
export default Chatbar;
