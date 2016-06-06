import React from 'react';

import Message from './Message';

import Sass from '../sass/messageList.scss';

var MessageList = React.createClass ({
	render() {

		let messages = this.props.messages.map(function(message, index){
			return <Message key={message.id} {...message} />
		});

		return (
			<div className="chat-list">
				{messages}
			</div>
		);
	}
});

export default MessageList;
