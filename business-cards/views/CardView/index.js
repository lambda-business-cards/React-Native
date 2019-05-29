import React from 'react';
import { View, Text } from 'react-native';

import Card from '../../components/Card';

export default ({ navigation }) => (

  <View>

    <Card card={navigation.getParam('card')} />

  </View>

)
