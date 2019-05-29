import React from 'react';
import { View, Text, AsyncStorage, Button } from 'react-native';

export default class HomeView extends React.Component {

  render() {

    return (

      <View>

        <Text>Home Page</Text>

        <Button
          onPress={() => AsyncStorage.removeItem('token').then(() => this.props.navigation.navigate('Auth'))}
          title='Log Out'
        />

      </View>

    )

  }

}
