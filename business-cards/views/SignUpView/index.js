import React from 'react';
import { View, TextInput, Text } from 'react-native';

import styles from './styles.js';
import SignUpForm from '../../components/SignUpForm';

export default () => {

  return (

    <View style={styles.container}>

      <Text style={styles.text}>Sign Up</Text>

      <SignUpForm />

    </View>

  )

}
