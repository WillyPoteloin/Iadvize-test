// Import libraries
import React from 'react';
import {connect} from 'react-redux';
import Moment from 'moment';

// Import components
import {addMessage} from '../actions';

// Import styles
import Sass from '../sass/messageForm.scss';

export var MessageForm = React.createClass({
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

		// Test for empty message
		if(!message.text.trim()) return false;

		// Dispatch action to the store
		this.props.dispatch(addMessage(Object.assign({}, message, {date: Moment().format('X')})));

		// Clean input
		message.text = '';
		this.setState(Object.assign({}, this.state, {message: message}));
	},
	render() {
		return (
            <form className="chat-form" onSubmit={this.onSubmitHandler}>
                <input className="chat-form-input" type="text" value={this.state.message.text} onChange={this.onTextChange}/>
                <input className="chat-form-submit" type="submit" value="Send"/>
            </form>
		)
	}
});

export default connect()(MessageForm);
