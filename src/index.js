import * as serviceWorker from './serviceWorker';
import store from './Redux/reduxStore.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';

const renderFullTree = (store) => {
  ReactDOM.render(<App store={store} dispatch={store.dispatch.bind(store)}/>, document.getElementById('root'));
};
renderFullTree(store);

store.subscribe(() => {
  renderFullTree(store);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();