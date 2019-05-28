import React from 'react';
import { View, Text, AsyncStorage, Button } from 'react-native';

export default class MyCardsView extends React.Component {

  static navigationOptions = {

    drawerLabel: 'My Cards'

  }

  render() {

    console.log(this.props);

    return (

      <View>

        <Text>My Cards Page</Text>

      </View>

    )

  }

}
