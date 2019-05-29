import React from 'react';
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { Text } from 'react-native';

import HomeView from '../../views/HomeView';
import MyCardsView from '../../views/MyCardsView';
import MySavedCardsView from '../../views/MySavedCardsView';
import AddCardView from '../../views/AddCardView';
import CardView from '../../views/CardView';
import ScanCardView from '../../views/ScanCardView';

import OpenButton from '../OpenButton';

const DrawerStack = createDrawerNavigator({
  Home: HomeView,
  'My Cards': MyCardsView,
  'Saved Cards': MySavedCardsView,
  'Add Cards': AddCardView,
  'Scan New Card': ScanCardView
}, {

  navigationOptions: ({ navigation }) => ({
    headerLeft: <OpenButton navigation={navigation} />
  })

});

const navigator = createStackNavigator({
  DrawerStack,
  CardView
}, {
  headerMode: 'float',
  navigationOptions: () => { title: 'test' }
})

export default navigator;
