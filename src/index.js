import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import { rootReducer } from './Redux/rootReducer';
import App from './App';
import './index.css';

const store = createStore(rootReducer, applyMiddleware(thunk));

const app = (
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
  </React.StrictMode>
)

ReactDOM.render(
  app,
  document.getElementById('root')
);

