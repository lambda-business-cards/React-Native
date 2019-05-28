import React from 'react';
import { ScrollView, Text, AsyncStorage, Button } from 'react-native';

import AddCardForm from '../../components/AddCardForm';
import styles from './styles';

export default class AddCardView extends React.Component {

  render() {

    return (

      <ScrollView>

        <Text style={styles.title}>Add Card</Text>

        <AddCardForm />

      </ScrollView>

    )

  }

}
