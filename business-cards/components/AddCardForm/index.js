import React from 'react';
import { Text, TextInput, View, TouchableOpacity as Button } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';

class AddCardForm extends React.Component {

  state = {

    business_name: '',
    contact_name: '',
    email: '',
    phone: '',
    address: '',
    fax: '',
    web_url: ''

  }

  handleChange = (text, field) => {

    this.setState({
      [field]: text,
      badLogin: false
    });

  }

  render() {

    const { business_name, contact_name, email, phone, address, fax, web_url } = this.state;

    return (

      <View>

        <View style={styles.field}>

          <Text style={styles.label}>Business Name:</Text>

          <TextInput
            value={business_name}
            onChangeText={text => this.handleChange(text, 'business_name')}
            style={styles.input}
          />

        </View>

        <View style={styles.field}>

          <Text style={styles.label}>Contact Name:</Text>

          <TextInput
            value={contact_name}
            onChangeText={text => this.handleChange(text, 'contact_name')}
            style={styles.input}
          />

        </View>

        <View style={styles.field}>

          <Text style={styles.label}>Email:</Text>

          <TextInput
            value={email}
            onChangeText={text => this.handleChange(text, 'email')}
            style={styles.input}
          />

        </View>

        <View style={styles.field}>

          <Text style={styles.label}>Phone:</Text>

          <TextInput
            value={phone}
            style={styles.input}
            onChangeText={text => this.handleChange(text, 'phone')}
          />

        </View>

        <View style={styles.field}>

          <Text style={styles.label}>Address:</Text>

          <TextInput
            value={address}
            onChangeText={text => this.handleChange(text, 'address')}
            style={styles.input}
          />

        </View>

        <View style={styles.field}>

          <Text style={styles.label}>Fax:</Text>

          <TextInput
            value={fax}
            onChangeText={text => this.handleChange(text, 'fax')}
            style={styles.input}
          />

        </View>

        <View style={styles.field}>

          <Text style={styles.label}>Website:</Text>

          <TextInput
            value={web_url}
            onChangeText={text => this.handleChange(text, 'web_url')}
            style={styles.input}
          />

        </View>

        <View style={styles.field}>

        <Button
          onPress={() => console.log('added')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Add Card!</Text>
        </Button>

        </View>

      </View>

    );

  }

}

const stateToProps = state => ({
  token: state.token
});

export default connect(stateToProps, null)(AddCardForm);
