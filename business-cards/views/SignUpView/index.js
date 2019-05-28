import React from 'react';
import { View, TextInput, Text, AsyncStorage } from 'react-native';

import styles from './styles.js';
import SignUpForm from '../../components/SignUpForm';

export default class SignUpView extends React.Component {

  handleSignupSuccess = data => {

    AsyncStorage.setItem('token', data.token)
      .then(() => this.props.navigation.navigate('App'))

  }

  render() {

    return (

      <View style={styles.container}>

        <Text style={styles.text}>Sign Up</Text>

        <SignUpForm handleSignupSuccess={this.handleSignupSuccess}/>

      </View>

    )

  }

}
