import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App';
import { rootReducer } from './Redux/rootReducer';

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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
