import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import styles from './styles';

export default withNavigation(({ card, navigation, source }) => (

  <TouchableOpacity
    onPress={() => navigation.navigate('CardView', { card, source })}>

    <View style={styles.container}>

      <Text>{card.business_name}</Text>

    </View>

  </TouchableOpacity>

))
