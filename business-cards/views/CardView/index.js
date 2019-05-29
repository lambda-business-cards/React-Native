import React from 'react';
import { View, Text } from 'react-native';

import Card from '../../components/Card';

export default class CardView extends React.Component {

  render() {

    const { navigation } = this.props;

    return (

      <View>

        <Card card={navigation.getParam('card')} />

      </View>

    );

  }

}
