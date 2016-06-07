// Import libraries
import React from 'react';
import Moment from 'moment';
import classNames from 'classnames';

// Import styles
import Sass from '../sass/message.scss';

var Message = React.createClass({
	propTypes: {

	},
	render() {

		var messageClassNames = classNames(
			'chat-message',
			{
				'mine': (this.props.current_user.name == this.props.user.name)
			}
		);

		return (
			<div className={messageClassNames}>
				<div className="header">
					<span className="user"><img src={this.props.user.picture} alt={this.props.user.name} /></span>
				</div>
				<div className="content">
					<span>{this.props.text}</span>
				</div>
				<div className="footer">
					<span className="date">{Moment(this.props.date, 'X').fromNow()}</span>
				</div>
			</div>
		)
	}
});

export default Message;
