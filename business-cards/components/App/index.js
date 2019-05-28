import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeView from '../../views/HomeView';

const navigator = createStackNavigator({
  Home: HomeView
});

export default navigator;
