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
      dispatch(loginFail(err));
      return false;
    })
};

export const loginSuccessful = createAction('LOGIN_SUCCESSFUL');

export const loginFail = createAction('LOGIN_FAIL');
