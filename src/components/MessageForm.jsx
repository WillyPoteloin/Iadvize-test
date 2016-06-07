import React from 'react';

import Sass from '../sass/messageForm.scss';

var MessageForm = React.createClass({
	getInitialState: function() {
		return {
			message: {
				text: '',
				user: this.props.current_user,
			}
		}
	},
	onTextChange: function(event) {
			event.preventDefault();

			let message = this.state.message;

			message.text = event.target.value;

			this.setState(Object.assign({}, this.state, {message: message}));
	},
	onSubmitHandler: function(event) {
		event.preventDefault();

		let message = this.state.message;

		this.props.addMessage(Object.assign({}, message));

		message.text = '';

		this.setState(Object.assign({}, this.state, {message: message}))
	},
	render() {
		return (
            <form className="chat-form" onSubmit={this.onSubmitHandler}>
                <input type="text" value={this.state.message.text} onChange={this.onTextChange}/>
                <input type="submit" value="Send"/>
            </form>
		)
	}
});

export default MessageForm;
