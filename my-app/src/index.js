import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//rudux
import { createStore, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'


ReactDOM.render(
<BrowserRouter>
    <App />
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
