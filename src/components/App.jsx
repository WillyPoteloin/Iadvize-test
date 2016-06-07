// Import libraries
import React from 'react';
import Moment from 'moment';

// Import components
import Chat from './Chat';

// Import images
import kylo from '../../images/kylo.png';
import jabba from '../../images/jabba.jpg';


var App = React.createClass({
    getUser: function(index) {
      let users = [
        {
          name: 'Kylo Ren',
          picture: kylo
        },
        {
          name: 'Jabba le Hutt',
          picture: jabba
        }
      ];

      return users[index];
    },
    render() {
        return(
            <div>
            <Chat name='Chat 1' current_user={this.getUser(0)} />
            <Chat name='Chat 2' current_user={this.getUser(1)}/>
            </div>
        );
    }
});

export default App;
