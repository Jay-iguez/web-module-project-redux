import React from 'react';
import ReactDOM from 'react-dom';
import { legacy_createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';

import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

const rootReducer = combineReducers({
  componentState: reducer
})

const store = legacy_createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store} >
    <Router>
      <App />
  </Router>
  </Provider>,
  document.getElementById('root')
);
