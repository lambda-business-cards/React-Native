import React from 'react';
import { View, Text, AsyncStorage } from 'react-native';

export default class AuthCheck extends React.Component {

  componentDidMount() {

    AsyncStorage.getItem('token')
      .then(token => this.props.navigation.navigate(token ? 'App' : 'Auth'));

  }

  render() {

    return (

      <View>

        <Text>Loading...</Text>

      </View>

    )

  }

}
