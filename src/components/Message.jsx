import React from 'react';
import Moment from 'moment';

import Sass from '../sass/message.scss';

var Message = React.createClass({

	render() {
		return (
			<div className="chat-message">
				<div className="header">
					<span className="user">{this.props.user}</span>
					<span className="date">{Moment(this.props.date, 'X').format('Y-DD-MM')}</span>
				</div>
				<div className="content">
					<span>{this.props.text}</span>
				</div>
			</div>
		)
	}
});

export default Message;
