import { AsyncStorage } from 'react-native';

export const LOGIN = 'LOGIN';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const SIGNUP = 'SIGNUP';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';
export const LOGOUT = 'LOGOUT';
export const FETCH_MINE = 'FETCH_MINE';
export const FETCH_SAVED = 'FETCH_SAVED';

export const login = credentials => dispatch => {

  console.log(`${process.env.SERVER_URL}/api/users/login`);

  return fetch(`${process.env.SERVER_URL}/api/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(res => res.status === 200 ? res.json() : console.log(res.status))
    .then(data => {

      if (data) {
        AsyncStorage.setItem('token', data.token);
        dispatch({
          type: LOGIN,
          payload: data.token
        });
        return true;
      }

      else {
        dispatch({
          type: LOGIN_FAIL
        });
      }

    })
    .catch(err => {
      dispatch({
        type: LOGIN_FAIL
      })
    });

}

export const signup = credentials => dispatch => {

  return fetch(`${process.env.SERVER_URL}/api/users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(res => {

      console.log('sign up', res.status);
      return res.status === 201 ? res.json() : null

    })
    .then(data => {

      if (data)  {

        AsyncStorage.setItem('token', data.token);

        dispatch({
          type: SIGNUP,
          payload: data.token
        });

        return true;

      }

      else {
        dispatch({
          type: SIGNUP_FAIL
        });
      }

    })
    .catch(err => dispatch({
      type: SIGNUP_FAIL
    }));

}

export const loginToken = token => ({
  type: LOGIN,
  payload: token
});

export const logout = () => ({
  type: LOGOUT
});

export const fetchMyData = token => dispatch => {

  console.log('getting');

  return fetch(`${process.env.SERVER_URL}/api/cards`, {
    headers: {
      Accept: 'application/json',
      Authorization: token
    }
  })
    .then(res => {
      return res.json()
    })
    .then(data => dispatch({
      type: FETCH_MINE,
      payload: data
    }))
    .catch(err => console.log(err));

}

export const fetchSavedData = token => dispatch => {

  fetch(`${process.env.SERVER_URL}/api/cards/saved`, {
    headers: {
      Accept: 'application/json',
      Authorization: token
    }
  })
    .then(res => {
      return res.json()
    })
    .then(data => dispatch({
      type: FETCH_SAVED,
      payload: data
    }))
    .catch(err => console.log(err));

}
