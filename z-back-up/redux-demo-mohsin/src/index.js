// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// serviceWorker.unregister();

import React from 'react';
import App from '../src/App';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import allReducer from './reducers';

const store = createStore(
   allReducer,
   applyMiddleware(thunk),
)

render(
   <Provider store = {store}>
      <App />
   </Provider>, document.getElementById('root')
)