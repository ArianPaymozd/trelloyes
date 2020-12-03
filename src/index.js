import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Store from './STORE'

ReactDOM.render(
  <App {...Store}/>,
  document.getElementById('root'),
);
