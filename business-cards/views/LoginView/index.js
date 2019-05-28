import React from 'react';
import { View, TextInput, Text } from 'react-native';

import styles from './styles.js';
import LoginForm from '../../components/LoginForm';

export default () => {

  return (

    <View style={styles.container}>

      <Text style={styles.text}>Log In</Text>

      <LoginForm />

    </View>

  )

}
