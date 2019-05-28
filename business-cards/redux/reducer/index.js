import { LOGIN, LOGIN_FAIL, LOGOUT } from '../actions';
import { AsyncStorage } from 'react-native';

const initialState = {

  token: null,
  failedLogin: false

}

export default (state = initialState, action) => {

  switch (action.type) {

    case LOGIN:

      AsyncStorage.setItem('token', action.payload);
      return { ...state, token: action.payload, failedLogin: false };

    case LOGIN_FAIL:

      return { ...state, failedLogin: true };

    case LOGOUT:

      return { ...state, token: null, failedLogin: false };

    default:
      return state;

  }

}
