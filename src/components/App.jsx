import React from 'react';
import Moment from 'moment';

import Chat from './Chat';

var App = React.createClass({
    getInitialState: function(){
        return {
            messages: [
                {
                    id:1,
                    user: 'Me',
                    text:'Comment vas-tu ?',
                    date: Moment().format('X')
                }
            ],
            addMessage: this.addMessage
        }
    },
    addMessage: function(message) {
      let messages = this.state.messages;

      // Setting the message date
      message.date = Moment().format('X');

      messages.push(message);

      this.setState(Object.assign({}, this.state, {messages: messages}));
    },
    render() {
        return(
            <div>
            <Chat {...this.state} name='Chat 1' />
            <Chat {...this.state} name='Chat 2' />
            </div>
        );
    }
});

export default App;
