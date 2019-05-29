import React from 'react';
import { View, Text, Image, TouchableOpacity as Button } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

import styles from './styles';

class Card extends React.Component {

  state = {

    card: null,
    fromId: false

  }

  deleteCard = id => {

    console.log('deleting', this.props.source);

    fetch(this.props.source === 'mine' ? `${process.env.SERVER_URL}/api/cards/${id}` : `${process.env.SERVER_URL}/api/cards/unsave/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: this.props.token
      }
    })
      .then(res => {

        console.log('we back', res.status)

        if (res.status === 200)
          this.props.navigation.goBack();

      })
      .catch(err => console.log(err));

  }

  saveCard(id) {

    fetch(`${process.env.SERVER_URL}/api/cards/save`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: this.props.token
      },
      body: JSON.stringify({
        card_id: id
      })
    })
      .then(res => {

        if (res.status === 200)
          this.props.navigation.goBack();

      })
      .catch(err => console.log(err));

  }

  componentDidMount() {

    if (!this.props.card && this.props.card_id) {

      this.setState({ fromId: true });

      fetch(`${process.env.SERVER_URL}/api/cards/${this.props.card_id}`, {
        headers: {
          Accept: 'application/json',
          Authorization: this.props.token
        }
      })
        .then(res => res.json())
        .then(data => {
          this.setState({ card: data })
        })
        .catch(err => console.log(err));

    }

  }

  render() {

    let card;

    if (this.state.fromId) {

      card = this.state.card;

    }

    else {

      card = this.props.card;

    }

    return (

      <View style={styles.container}>

        {card ?
          (<>
            <Image
              source={{uri: card.qr_url}}
              style={styles.qr}
            />

            <Text>Business name: {card.business_name}</Text>
            <Text>Contact name: {card.contact_name}</Text>
            <Text>Contact email: {card.email}</Text>

            {!this.props.foreign &&
              <Button
                onPress={() => this.deleteCard(card.id)}
              >
                <Text>Delete Card</Text>
              </Button>}

            {this.props.foreign &&
              <Button
                onPress={() => this.saveCard(card.id)}
              >
                <Text>Save Card</Text>
              </Button>}

          </>) :
          <Text>Loading card...</Text>}

      </View>

    )

  }

}

const stateToProps = state => ({
  token: state.token
});

export default connect(stateToProps, null)(withNavigation(Card));
