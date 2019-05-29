import React from 'react';
import { View, Text, TouchableOpacity as Button } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

import CardPreview from '../CardPreview';

class CardsList extends React.Component {

  state = {

    cards: null

  }

  componentDidMount() {

    this.getData();

  }

  getData = () => {

    fetch(this.props.mode === 'mine' ? `${process.env.SERVER_URL}/api/cards` : `${process.env.SERVER_URL}/api/cards/saved`, {
      headers: {
        Accept: 'application/json',
        Authorization: this.props.token
      }
    })
      .then(res => res.json())
      .then(data => this.setState({ cards: data }))
      .catch(err => console.log(err));

  }

  componentDidUpdate(prevProps) {

    if (this.props.shouldFetch && !prevProps.shouldFetch) {

      console.log('triggering another fetch');
      this.getData();
      this.props.acknowledge();

    }

  }

  render() {

    return (

      <View>

        {!this.state.cards && <Text>Loading cards...</Text>}

        {this.state.cards && this.state.cards.length === 0 && <Text>Looks like there aren't any cards yet!</Text>}

        {this.state.cards && this.state.cards.length === 0 && this.props.source === 'mine' &&
          <Button onPress={() => this.props.navigation.navigate('Add Cards')}>
            <Text>Create a card!</Text>
          </Button>
        }

        {this.state.cards && this.state.cards.map(card => <CardPreview key={card.id} card={card} source={this.props.source} />)}

      </View>

    );

  }

}

const stateToProps = state => ({

  token: state.token

});

export default connect(stateToProps, null)(withNavigation(CardsList));
