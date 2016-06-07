// Import libraries
import React from 'react';

// Import components
import Message from './Message';

// Import styles
import Sass from '../sass/messageList.scss';

var MessageList = React.createClass ({
	scrollBottom: function() {
		this._list.scrollTop = this._list.scrollHeight;
	},
	componentDidMount: function() {
		this.scrollBottom();
	},
	componentDidUpdate: function() {
		this.scrollBottom();
	},
	render() {

		let messages = this.props.messages.map((message, index) => {
			return <Message key={index} {...message} current_user={this.props.current_user} />
		});

		return (
			<div className="chat-list" ref={list => this._list = list}>
				{messages}
			</div>
		);
	}
});

export default MessageList;
