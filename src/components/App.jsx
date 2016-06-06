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
        }
    },
    render() {
        return(
            <div>
            <Chat {...this.state} />
            <Chat {...this.state} />
            </div>
        );
    }
});

export default App;
