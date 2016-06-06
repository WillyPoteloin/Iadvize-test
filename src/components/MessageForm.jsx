import React from 'react';

import Sass from '../sass/messageForm.scss';

var MessageForm = React.createClass({

	onSubmitHandler: function(event) {
		event.preventDefault();
	},
	render() {
		return (
            <form className="chat-form" onSubmit={this.onSubmitHandler}>
                <input type="text"/>
                <input type="submit" value="Send"/>
            </form>
		)
	}
});

export default MessageForm;
