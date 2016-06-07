import React from 'react';

import MessageList from './MessageList';
import MessageForm from './MessageForm';

import Sass from '../sass/chat.scss';

var Chat = React.createClass ({
    render() {
        return (
			<div className="chat">
				<h1>{this.props.name}</h1>
				<MessageList messages={this.props.messages} current_user={this.props.current_user} />
				<MessageForm addMessage={this.props.addMessage} current_user={this.props.current_user} />
			</div>
        );
    }
});

export default Chat;
