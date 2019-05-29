import React from 'react';
import { ScrollView, Text, AsyncStorage, Button } from 'react-native';

import AddCardForm from '../../components/AddCardForm';
import globalStyles from '../../globalStyles';

export default class UpdateCardView extends React.Component {

  render() {

    return (

      <ScrollView>

        <Text style={globalStyles.title}>Update Card</Text>

        <AddCardForm mode='update' card={this.props.navigation.getParam('card')}/>

      </ScrollView>

    )

  }

}
