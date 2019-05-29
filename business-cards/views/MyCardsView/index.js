import React from 'react';
import { View, Text, AsyncStorage, Button } from 'react-native';

import CardsList from '../../components/CardsList';

export default class MyCardsView extends React.Component {

  render() {

    return (

      <View>

        <Text>My Cards Page</Text>

        <CardsList mode='mine' />

      </View>

    )

  }

}
