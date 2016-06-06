import React from 'react';

import MessageList from './MessageList';
import MessageForm from './MessageForm';

import Sass from '../sass/chat.scss';

var Chat = React.createClass ({
    render() {
        return (
			<div className="chat">
				<h1>Chat</h1>
				<MessageList messages={this.props.messages} />
				<MessageForm/>
			</div>
        );
    }
});

export default Chat;
