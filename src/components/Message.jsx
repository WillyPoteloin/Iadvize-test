import React from 'react';
import Moment from 'moment';
import classNames from 'classnames';

import Sass from '../sass/message.scss';

var Message = React.createClass({

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
					<span className="user">{this.props.user.name}</span>
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
