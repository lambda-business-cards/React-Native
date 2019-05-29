import React from 'react';
import { View, TextInput, Text, Button, Alert, AsyncStorage } from 'react-native';
import Config from 'react-native-config';
import { connect } from 'react-redux';

import { signup } from '../../redux/actions';
import styles from './styles.js';

class SignUp extends React.Component {

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

    this.props.signup(this.state);

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

const stateToProps = state => ({
  token: state.token,
  failedLogin: state.failedLogin
});

export default connect(null, { signup })(SignUp);
