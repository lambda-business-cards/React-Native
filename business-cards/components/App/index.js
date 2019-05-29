import React from 'react';
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { Text } from 'react-native';

import HomeView from '../../views/HomeView';
import MyCardsView from '../../views/MyCardsView';
import AddCardView from '../../views/AddCardView';
import CardView from '../../views/CardView';

const DrawerStack = createDrawerNavigator({
  Home: HomeView,
  'My Cards': MyCardsView,
  'Add Cards': AddCardView
});

const navigator = createStackNavigator({
  DrawerStack,
  CardView
}, {
  headerMode: 'float',
  navigationOptions: () => { title: 'test' }
})

export default navigator;
