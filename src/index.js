import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider, createStore } from 'react-redux';
import { rootReducer } from './reducers';


const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // the Redux devtools extension
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


