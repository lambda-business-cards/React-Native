import React from 'react';
import { ScrollView, Text, AsyncStorage, Button } from 'react-native';

import AddCardForm from '../../components/AddCardForm';
import globalStyles from '../../globalStyles';

export default class AddCardView extends React.Component {

  render() {

    return (

      <ScrollView>

        <Text style={globalStyles.title}>Add Card</Text>

        <AddCardForm />

      </ScrollView>

    )

  }

}
