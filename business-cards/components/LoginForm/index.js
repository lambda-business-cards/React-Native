import React from 'react';
import { View, TextInput, Text, Button, Alert } from 'react-native';
import axios from 'axios';

import styles from './styles.js';

export default class Login extends React.Component {

  state = {

    username: '',
    password: ''

  }

  handleChange = (text, field) => {

    this.setState({
      [field]: text
    });

  }

  handleSubmit() {

    axios.post(`${process.env.REACT_APP_SERVER_URL}/api/users/login`, this.state)
      .then(res => Alert.alert("good login homie"))
      .catch(err => Alert.alert("bad login"));

  }

  render() {

    return (

      <View style={styles.container}>

        <TextInput
          style={styles.textInput}
          placeholder='username'
          onChangeText={text => this.handleChange(text, 'username')}
          value={this.state.username}
        />

        <TextInput
          style={styles.textInput}
          placeholder='password'
          onChangeText={text => this.handleChange(text, 'password')}
          value={this.state.password}
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
