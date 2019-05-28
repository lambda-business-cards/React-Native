import React from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

import { loginToken } from '../../redux/actions';

class AuthCheck extends React.Component {

  componentDidMount() {

    AsyncStorage.getItem('token')
      .then(token => {

        if (token) {

          this.props.loginToken(token);
          this.props.navigation.navigate('App');

        }

        else {

          this.props.navigation.navigate('Auth');

        }

      });

  }

  render() {

    return (

      <View>

        <Text>Loading...</Text>

      </View>

    )

  }

}

export default connect(null, { loginToken })(AuthCheck);
