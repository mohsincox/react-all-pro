import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Add these imports - Step 1
import { Provider } from 'react-redux';
import { store } from './redux';

// Wrap existing app in Provider - Step 2
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);



// https://blog.tylerbuchea.com/super-simple-react-redux-application-example/

// https://blog.tylerbuchea.com/super-simple-redux-thunk-example/