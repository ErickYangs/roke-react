import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import IRouter from './router'
import * as serviceWorker from './serviceWorker';
import Utils from './utils/utils'
import Http from './api'
window.$utils = Utils
window.$http = Http

ReactDOM.render(<IRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
