import React from 'react';

import Message from './Message';

import Sass from '../sass/messageList.scss';

var MessageList = React.createClass ({
	render() {
		let messages = this.props.messages.map((message, index) => {
			return <Message key={index} {...message} current_user={this.props.current_user} />
		});

		return (
			<div className="chat-list">
				{messages}
			</div>
		);
	}
});

export default MessageList;
