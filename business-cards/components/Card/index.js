import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

export default ({ card }) => {

  return (

    <View style={styles.container}>

      <Image
        source={{uri: card.qr_url}}
        style={styles.qr}
      />

      <Text>Business name: {card.business_name}</Text>
      <Text>Contact name: {card.contact_name}</Text>
      <Text>Contact email: {card.email}</Text>

    </View>

  )

}
