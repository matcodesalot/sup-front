import fetch from 'isomorphic-fetch';
import axios from 'axios';
import { createAction } from 'redux-actions';
import { hashHistory } from 'react-router';

export const loginRequest = (username, password) => dispatch => {
  return axios.get('https://polar-escarpment-86427.herokuapp.com/api/v1/users', { auth: { username, password } })
    .then(() => {
      dispatch(loginSuccessful({ username, password}));
      hashHistory.push('/message');
      return { username, password };
  })
    .catch(err => {
      dispatch(handleFail(err));
      return false;
    })
};

export const loginSuccessful = createAction('LOGIN_SUCCESSFUL');
export const handleFail = createAction('HANDLE_FAIL');

export const createAccount = (username, password) => dispatch => {
	return axios.post('https://polar-escarpment-86427.herokuapp.com/api/v1/users', { username, password })
  	.then(function (response) {
    	console.log(response);
    	hashHistory.push('/login');
  	})
  	.catch(function (error) {
    	console.log(error);
  	});
};

export const createAccountSuccessful = createAction('CREATE_ACCOUNT_SUCCESSFUL');
export const destroySession = createAction('DESTROY_SESSION');