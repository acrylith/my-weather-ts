import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/index';
import ReactDOM from 'react-dom';
import './styles/style.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);