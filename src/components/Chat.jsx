// Import libraries
import React from 'react';

// Import components
import ChatMessageList from './ChatMessageList';
import MessageForm from './MessageForm';

// Import styles
import Sass from '../sass/chat.scss';

var Chat = React.createClass ({
    render() {
        return (
			<div className="chat">
				<h1>{this.props.name}</h1>
				<ChatMessageList current_user={this.props.current_user} />
				<MessageForm current_user={this.props.current_user} />
			</div>
        );
    }
});

export default Chat;
