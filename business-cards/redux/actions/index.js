export const LOGIN = 'LOGIN';
export const LOGIN_FAIL = 'LOGIN_FAIL';
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
    .then(res => res.json())
    .then(data => dispatch({
      type: LOGIN,
      payload: data.token
    }))
    .catch(err => {
      dispatch({
        type: LOGIN_FAIL
      })
    });

}

export const loginToken = token => ({
  type: LOGIN,
  payload: token
});
