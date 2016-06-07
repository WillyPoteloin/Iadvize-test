import React from 'react';
import Moment from 'moment';

import Chat from './Chat';

var App = React.createClass({
    getInitialState: function(){
        return {
            messages: [
                {
                    id:1,
                    user: {
                      name: 'Kylo Ren',
                      picture: ''
                    },
                    text:'Comment vas-tu ?',
                    date: Moment().format('X')
                }
            ],
            addMessage: this.addMessage
        }
    },
    getUser: function(index) {
      let users = [
        {
          name: 'Kylo Ren',
          picture: ''
        },
        {
          name: 'Jabba le Hutt',
          picture: ''
        }
      ];

      return users[index];
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
            <Chat {...this.state} name='Chat 1' current_user={this.getUser(0)} />
            <Chat {...this.state} name='Chat 2' current_user={this.getUser(1)}/>
            </div>
        );
    }
});

export default App;
