import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';

import modules from 'store/modules';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import penderMiddleWare from 'redux-pender';
import { Provider } from 'react-redux';
import configure from 'store/configure';

//const logger = createLogger();
//const store = createStore(modules, applyMiddleware(logger,penderMiddleWare()));

const store = configure();

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;