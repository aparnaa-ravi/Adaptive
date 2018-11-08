import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route,Switch,Link} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
