import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

export default ({navigation}) => {

  return (

    <View>

      <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{paddingLeft: 10, paddingRight: 10}}>

        <Text>Menu</Text>

      </TouchableOpacity>

    </View>

  );

}
