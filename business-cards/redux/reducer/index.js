import { LOGIN, LOGIN_FAIL, LOGOUT, SIGNUP, SIGNUP_FAIL } from '../actions';
import { AsyncStorage } from 'react-native';

const initialState = {

  token: null,
  failedLogin: false

}

export default (state = initialState, action) => {

  switch (action.type) {

    case LOGIN:

      AsyncStorage.setItem('token', action.payload);
      const newData = action.payload;
      return { ...state, token: JSON.parse(JSON.stringify(action.payload)), failedLogin: false };

    case LOGIN_FAIL:

      console.log(action.payload);
      return { ...state, failedLogin: action.payload };

    case SIGNUP:

      AsyncStorage.setItem('token', action.payload);
      return { ...state, token: action.payload, failedLogin: false };

    case SIGNUP_FAIL:

      return { ...state, failedLogin: action.payload };

    case LOGOUT:

      return { ...state, token: null, failedLogin: false };

    default:
      return state;

  }

}
