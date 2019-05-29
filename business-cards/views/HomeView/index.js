import React from 'react';
import { View, Text, AsyncStorage, Button } from 'react-native';
import { connect } from 'react-redux';

import { logout } from '../../redux/actions';

class HomeView extends React.Component {

  render() {

    return (

      <View>

        <Text>Home Page</Text>

        <Button
          onPress={() => {
            this.props.logout();
            this.props.navigation.navigate('Auth')
          }}
          title='Log Out'
        />

      </View>

    )

  }

}

export default connect(null, { logout })(HomeView);
