import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App'
import * as serviceWorker from './serviceWorker';
import axios from 'axios'; 


axios.defaults.baseURL = 'http://localhost:8085/'
//axios.defaults.baseURL = '192.168.43.252:3001/'
axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token');

render( <App/> ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
