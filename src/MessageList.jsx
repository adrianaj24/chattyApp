import React, { Component } from "react";
import Message from "./Message.jsx";

class MessageList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.messages) {
            return (
                <div>
                    {this.props.messages.map((message, index) => < Message message={message} key={index}/>)}
                </div>
            );
        }
}
}
 export default MessageList