import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import LoginView from '../../views/LoginView';
import SignUpView from '../../views/SignUpView';

const navigator = createBottomTabNavigator({
  Login: LoginView,
  SignUp: SignUpView
});

export default navigator;
