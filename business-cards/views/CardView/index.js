import React from 'react';
import { View, Text } from 'react-native';

import Card from '../../components/Card';

export default class CardView extends React.Component {

  render() {

    const { navigation } = this.props;

    return (

      <View>

        <Card
          card={navigation.getParam('card')}
          card_id={navigation.getParam('card_id')}
          foreign={navigation.getParam('foreign')}
          source={navigation.getParam('source')}
        />

      </View>

    );

  }

}
