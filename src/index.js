import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import Sass from './sass/app.scss'; 

// Create the root app element
const app = document.createElement("div");
app.setAttribute('id', 'chat-app');
document.body.appendChild(app);

// Display the chat component in the root app element
ReactDOM.render(<App/>, document.querySelector('#chat-app'));
