import React from 'react';
import { View, TextInput, Text, Button, Alert, AsyncStorage } from 'react-native';
import Config from 'react-native-config';

import styles from './styles.js';

export default class SignUp extends React.Component {

  constructor() {

    super();

    this.state = {

      username: '',
      password: '',
      email: '',
      phone: ''

    }

  }

  handleChange = (text, field) => {

    this.setState({
      [field]: text
    });

  }

  handleSubmit = () => {

    console.log('signing up...');

    fetch(`${process.env.SERVER_URL}/api/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(data => {

        console.log('yeet');
        console.log(data);

        if (data.token) {

          this.props.handleSignupSuccess(data);

        }

      })
      .catch(err => console.log(err));

  }

  render() {

    return (

      <View style={styles.container}>

        <TextInput
          style={styles.textInput}
          placeholder='username'
          onChangeText={text => this.handleChange(text, 'username')}
          value={this.state.username}
          autoCapitalize='none'
        />

        <TextInput
          style={styles.textInput}
          placeholder='email'
          onChangeText={text => this.handleChange(text, 'email')}
          value={this.state.email}
          autoCapitalize='none'
        />

        <TextInput
          style={styles.textInput}
          keyboardType='phone-pad'
          placeholder='phone'
          onChangeText={text => this.handleChange(text, 'phone')}
          value={this.state.phone}
          autoCapitalize='none'
        />

        <TextInput
          style={styles.textInput}
          placeholder='password'
          onChangeText={text => this.handleChange(text, 'password')}
          value={this.state.password}
          secureTextEntry
          autoCapitalize='none'
        />

        <Button
          onPress={this.handleSubmit}
          title="Sign Up"
        />

      </View>

    )

  }

}
