import React from 'react';
import { View, Text, TouchableOpacity as Button } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

import CardPreview from '../CardPreview';
import globalStyles from '../../globalStyles';
import { selectMyCards, selectSavedCards } from '../../redux/selectors';
import { fetchMyData, fetchSavedData } from '../../redux/actions';

class CardsList extends React.Component {

  componentDidMount() {

    this.props.source === 'mine' ? this.props.fetchMyData(this.props.token) : this.props.fetchSavedData(this.props.token);

  }

  render() {

    const cards = this.props.source === 'mine' ? this.props.myCards : this.props.savedCards;

    console.log('cards', cards);
    console.log('mine', this.props.myCards);

    return (

      <View style={{justifyContent: 'center', alignItems: 'center'}}>

        {!cards && <Text>Loading cards...</Text>}

        {cards && cards.length === 0 && <Text>Looks like there aren't any cards yet!</Text>}

        {cards && cards.length === 0 && this.props.source === 'mine' &&
          <Button onPress={() => this.props.navigation.navigate('Add Cards')} style={globalStyles.button}>
            <Text style={globalStyles.buttonText}>Create a card!</Text>
          </Button>
        }

        {cards && cards.map(card => <CardPreview key={card.id} card={card} source={this.props.source} />)}

      </View>

    );

  }

}

const stateToProps = state => ({

  token: state.token,
  myCards: selectMyCards(state),
  savedCards: selectSavedCards(state),

});

export default connect(stateToProps, { fetchMyData, fetchSavedData })(withNavigation(CardsList));
