import { LOGIN, LOGIN_FAIL, LOGOUT, SIGNUP, SIGNUP_FAIL, FETCH_MINE, FETCH_SAVED } from '../actions';
import { AsyncStorage } from 'react-native';

const initialState = {

  token: null,
  failedLogin: false,
  myCards: null,
  savedCards: null

}

export default (state = initialState, action) => {

  switch (action.type) {

    case LOGIN:

      const newData = action.payload;
      return { ...state, token: JSON.parse(JSON.stringify(action.payload)), failedLogin: false };

    case LOGIN_FAIL:

      return { ...state, failedLogin: action.payload };

    case SIGNUP:

      return { ...state, token: action.payload, failedLogin: false };

    case SIGNUP_FAIL:

      return { ...state, failedLogin: action.payload };

    case LOGOUT:

      return { ...state, token: null, failedLogin: false };

    case FETCH_MINE:

      console.log('gotten');
      return { ...state, myCards: action.payload }

    case FETCH_SAVED:

      return { ...state, savedCards: action.payload }

    default:
      return state;

  }

}
