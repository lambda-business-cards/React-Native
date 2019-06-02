import React from 'react';
import { View, Text, Image, TouchableOpacity as Button } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

import styles from './styles';
import globalStyles from '../../globalStyles';
import { fetchMyData, fetchSavedData } from '../../redux/actions';

console.log(globalStyles);

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

        this.props.source === 'mine' ? this.props.fetchMyData(this.props.token) : this.props.fetchSavedData(this.props.token);

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

    if (!this.props.foreign) {

      this.setState({
        fromId: true,
        card: this.props.card
      });

    }

  }

  componentDidUpdate(prevProps, prevState) {

    if (prevProps.myCards !== this.props.myCards) {

      this.setState({
        fromId: true,
        card: this.props.source === 'mine' ? this.props.myCards.find(card => card.id === prevState.card.id) : this.props.savedCards.find(card => card.id === this.props.card_id)
      });

    }

  }

  render() {

    const { card } = this.state;

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
                style={globalStyles.button}
              >
                <Text style={globalStyles.buttonText}>Delete Card</Text>
              </Button>}

            {this.props.foreign &&
              <Button
                onPress={() => this.saveCard(card.id)}
                style={globalStyles.button}
              >
                <Text style={globalStyles.buttonText}>Save Card</Text>
              </Button>}

          </>) :
          <Text>Loading card...</Text>}

          {!this.props.foreign && this.props.source === 'mine' &&
            <Button
              onPress={() => this.props.navigation.navigate('UpdateCardView', { card })}
              style={globalStyles.button}
            >
              <Text style={globalStyles.buttonText}>Update Card</Text>
            </Button>
          }

      </View>

    )

  }

}

const stateToProps = state => ({
  token: state.token,
  myCards: state.myCards,
  savedCards: state.savedCards
});

export default connect(stateToProps, { fetchMyData, fetchSavedData })(withNavigation(Card));
