import React from 'react'
import ReactDOM from 'react-dom';

import './index.css'

import Store from './routes.js';


ReactDOM.render(
  <React.StrictMode>
    <Store />
  </React.StrictMode>, 
  document.getElementById('root')
);