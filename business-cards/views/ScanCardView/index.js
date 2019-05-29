import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Permissions, BarCodeScanner } from 'expo';

export default class ScanCardView extends React.Component {

  state = {

    cameraAccess: null,
    scanError: false

  }

  componentDidMount() {

    Permissions.askAsync(Permissions.CAMERA)
      .then(status => {

        this.setState({ cameraAccess: status.status === 'granted' })

      });

  }

  handleScan = ({ data }) => {

    console.log(data);
    console.log()

    if (!Number.isNaN(data)) {

      this.props.navigation.navigate('CardView', { card_id: data, foreign: true });

    }

  }

  render() {

    return (

      <View>

        <Text>Scan Card</Text>

        {this.state.cameraAccess === null && <Text>Awaiting camera permissions...</Text>}
        {this.state.cameraAccess === false && <Text>Unable to access camera!</Text>}
        {this.state.cameraAccess &&
          <BarCodeScanner
            onBarCodeScanned={this.handleScan}
            style={StyleSheet.absoluteFillObject}
          />
        }

      </View>

    )

  }

}
