import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import  { createStore, applyMiddleware } from 'redux';

import './index.css';
import App from './app/app';
import { BrowserRouter } from 'react-router-dom';
import reducers from './reducers/index';

let createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>  
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);