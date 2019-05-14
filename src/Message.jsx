import React, { Component } from "react";

class Message extends Component {
  render() {
    if (this.props.message.type === "postNotification") {
      return (
        <div>
          <div className="notification">
            <span className="message-username1">
              {this.props.message.username}
            </span>
            <span className="notification-content">
              {this.props.message.content}
            </span>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className="message">
          <span className="message-username">
            {this.props.message.username}
          </span>
          <span className="message-content">{this.props.message.content}</span>
        </div>
      </div>
    );
  }
}
export default Message;
