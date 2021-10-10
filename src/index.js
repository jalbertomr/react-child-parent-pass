import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ParentComponent from './ParentComponent';

ReactDOM.render(
  <React.StrictMode>
    <ParentComponent />
  </React.StrictMode>,
  document.getElementById('root')
);
