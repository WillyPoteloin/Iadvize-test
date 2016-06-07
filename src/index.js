// Import libraries
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

// Import reducers
import chat from './reducers';

// Import components
import App from './components/App';

// Import styles
import Sass from './sass/app.scss';

// Create the application store
let store = createStore(chat);


// Create the root app element
const app = document.createElement("div");
app.setAttribute('id', 'chat-app');
document.body.appendChild(app);

// Display the chat component in the root app element
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
     document.querySelector('#chat-app')
 );
