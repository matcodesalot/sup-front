import fetch from 'isomorphic-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

import actions from './actions/index';
import reducers from './reducers/index';
import App from './App';
import './index.css';
import { Router, Route, Link, hashHistory } from 'react-router';
import Login from './components/login';
import Register from './components/register';
import Search from './components/search';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
		<Route path='/' component={App} />
		<Route path='/login' component={Login} />
		<Route path='/register' component={Register} />
		<Route path="/message" component={Search} />
	</Router>
  </Provider>,
  document.getElementById('root')
);