import React from 'react';
import { View, Text, Image, TouchableOpacity as Button } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

import styles from './styles';

class Card extends React.Component {

  deleteCard(id) {

    console.log('deleting');

    fetch(`${process.env.SERVER_URL}/api/cards/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: this.props.token
      }
    })
      .then(res => {

        if (res.status === 200)
          this.props.navigation.goBack();

      })
      .catch(err => console.log(err));

  }

  render() {

    const { card } = this.props;

    return (

      <View style={styles.container}>

        <Image
          source={{uri: card.qr_url}}
          style={styles.qr}
        />

        <Text>Business name: {card.business_name}</Text>
        <Text>Contact name: {card.contact_name}</Text>
        <Text>Contact email: {card.email}</Text>

        <Button
          onPress={() => this.deleteCard(card.id)}
        >
          <Text>Delete Card</Text>
        </Button>

      </View>

    )

  }

}

const stateToProps = state => ({
  token: state.token
});

export default connect(stateToProps, null)(withNavigation(Card));
