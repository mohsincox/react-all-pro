import React from 'react';
import App from '../src/App';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './store/reducer';
import thunk from "redux-thunk";
import rootReducer from './reducers';

const store = createStore(
   rootReducer,
   applyMiddleware(thunk),
)

render(
   <Provider store = {store}>
      <App />
   </Provider>, document.getElementById('root')
)