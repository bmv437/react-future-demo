import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const AsyncMode = React.unstable_AsyncMode;

ReactDOM.render(
  <AsyncMode>
    <App />
  </AsyncMode>
, document.getElementById('root'));
