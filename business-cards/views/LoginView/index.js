import React from 'react';
import { View, TextInput, Text, AsyncStorage } from 'react-native';

import styles from './styles.js';
import LoginForm from '../../components/LoginForm';

export default class LoginView extends React.Component {

  handleLoginSuccess = () => {

    this.props.navigation.navigate('App');

  }

  render() {

    return (

      <View style={styles.container}>

        <Text style={styles.text}>Log In</Text>

        <LoginForm handleLoginSuccess={this.handleLoginSuccess} />

      </View>

    )

  }

}
