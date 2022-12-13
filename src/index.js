import React from 'react';
import ReactDOM from 'react-dom/client';
import $ from 'jquery'
import reportWebVitals from './reportWebVitals';

import App from './App';

import '../node_modules/normalize.css/normalize.css';
import './stylesheet/css/fonts.css';
import './stylesheet/css/app.css';

const root = ReactDOM.createRoot($('#root')[0]);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
