import React from 'react';
import { View, TextInput, Text, Button, Alert } from 'react-native';
import { connect } from 'react-redux';

import { login } from '../../redux/actions';
import styles from './styles.js';

class Login extends React.Component {

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

    this.props.login(this.state)
      .then(() => this.props.handleLoginSuccess());

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

const LoginForm = connect(null, { login })(Login);

export default LoginForm;
