import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import CardPreview from '../CardPreview';

class CardsList extends React.Component {

  state = {

    cards: null

  }

  componentDidMount() {

    if (this.props.mode === 'mine') {

      fetch(`${process.env.SERVER_URL}/api/cards`, {
        headers: {
          Accept: 'application/json',
          Authorization: this.props.token
        }
      })
        .then(res => res.json())
        .then(data => this.setState({ cards: data }))
        .catch(err => console.log(err));

    }

  }

  render() {

    return (

      <View>

        {!this.state.cards && <Text>Loading cards...</Text>}

        {this.state.cards && this.state.cards.map(card => <CardPreview key={card.id} card={card} />)}

      </View>

    );

  }

}

const stateToProps = state => ({

  token: state.token

});

export default connect(stateToProps, null)(CardsList);
