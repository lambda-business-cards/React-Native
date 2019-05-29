export const LOGIN = 'LOGIN';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const SIGNUP = 'SIGNUP';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';
export const LOGOUT = 'LOGOUT';

export const login = credentials => dispatch => {

  return fetch(`${process.env.SERVER_URL}/api/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(res => res.status === 200 ? res.json() : null)
    .then(data => {

      if (data) {
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
      return res.status === 200 ? res.json() : null

    })
    .then(data => {

      if (data)  {

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
