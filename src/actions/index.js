import fetch from 'isomorphic-fetch';

export const SET_SIGN_IN = 'SET_SIGN_IN';
export function setSignIn(bool) {
    return {
        type: SET_SIGN_IN,
        payload: bool,
    };
}

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