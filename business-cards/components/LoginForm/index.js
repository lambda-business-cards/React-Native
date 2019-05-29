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

    if (this.state.username !== '' && this.state.password !== '') {

      this.props.login(this.state)
        .then(success => success ? this.props.handleLoginSuccess() : this.setState({ badLogin: 'invalid credentials!' }))
        .catch(err => this.setState({ badLogin: 'invalid credentials!' }));

    }

    else {

      this.setState({ badLogin: 'username and password are required!'});

    }

  }

  componentDidUpdate(prevProps) {

    if (this.props.token) {

      this.props.handleLoginSuccess();

    }

  }

  render() {

    console.log('render');

    return (

      <View style={styles.container}>

        {this.state.badLogin && <Text style={styles.badLogin}>{this.state.badLogin}</Text>}

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

const stateToProps = state => {

  console.log(state);

  return {

    token: state.token

  }

};

export default connect(state => ({ token: state.token, token2: state}), { login })(Login);
