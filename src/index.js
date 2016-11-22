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
import { Router, Route, Link, browserHistory } from 'react-router';
import Login from './components/login';
import Register from './components/register';
import Search from './components/search';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
		<Route path='/' component={App} />
		<Route path='/login' component={Login} />
		<Route path='/register' component={Register} />
		<Route path="/message" component={Search} />
	</Router>
  </Provider>,
  document.getElementById('root')
);


fetch('https://polar-escarpment-86427.herokuapp.com/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: 'tester123',
        password: 'tester123'
      })
    }).then(response => response.json().then(json => ({ json, response })))
      .then(({json, response}) => {
      if (response.ok === false) {
        return Promise.reject(json);
      }
      return json;
    })
    .then(
      data => {
    console.log(data);
      },
      ({response, data}) => {
          console.log(data);
          
          if(response.status == 401) {
              console.log(data.error);
          }
      }
    );
    
export default store;