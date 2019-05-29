import React from 'react';
import { View, Text, AsyncStorage, Button } from 'react-native';

import CardsList from '../../components/CardsList';
import globalStyles from '../../globalStyles';

export default class MyCardsView extends React.Component {

  state = {

    listener: null,
    shouldFetch: false

  }

  componentDidMount() {

    this.setState({ listener: this.props.navigation.addListener('willFocus', () => this.setState({ shouldFetch: true }))})

  }

  componentWillUnmount() {

    this.state.listener.remove();

  }

  acknowledge = () => {

    this.setState({ shouldFetch: false });

  }

  render() {

    return (

      <View>

        <Text style={globalStyles.title}>My Cards Page</Text>

        <CardsList mode='mine' shouldFetch={this.state.shouldFetch} acknowledge={this.acknowledge} source='mine' />

      </View>

    )

  }

}
