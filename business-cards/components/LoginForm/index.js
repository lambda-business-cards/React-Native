import React from 'react';
import { View, TextInput, Text, Button, Alert } from 'react-native';

import styles from './styles.js';

export default class Login extends React.Component {

  state = {

    username: '',
    password: '',
    badLogin: false

  }

  handleChange = (text, field) => {

    this.setState({
      [field]: text,
      badLogin: false
    });

  }

  handleSubmit = () => {

    console.log((this.state));

    fetch(`${process.env.SERVER_URL}/api/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(data => this.props.handleLoginSuccess(data))
      .catch(err => {
        this.setState({
          badLogin: true,
          password: ''
        });
        console.log(err);
      });

  }

  render() {

    return (

      <View style={styles.container}>

        {this.state.badLogin && <Text style={styles.badLogin}>Invalid Credentials!</Text>}

        <TextInput
          style={styles.textInput}
          placeholder='username'
          onChangeText={text => this.handleChange(text, 'username')}
          value={this.state.username}
          autoCapitalize='none'
        />

        <TextInput
          style={styles.textInput}
          placeholder='password'
          onChangeText={text => this.handleChange(text, 'password')}
          value={this.state.password}
          autoCapitalize='none'
          secureTextEntry
        />

        <Button
          onPress={this.handleSubmit}
          title="Log In"
        />

      </View>

    )

  }

}
