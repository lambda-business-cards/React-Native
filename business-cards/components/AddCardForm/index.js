import React from 'react';
import { Text, TextInput, View, TouchableOpacity as Button } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';

const statuses = {

  FAILED: 'FAILED',
  SUCCESS: 'SUCCESS'

}

class AddCardForm extends React.Component {

  state = {

    business_name: '',
    contact_name: '',
    email: '',
    phone: '',
    address: '',
    fax: '',
    web_url: '',
    submitStatus: null

  }

  handleSubmit = () => {

    fetch(`${process.env.SERVER_URL}/api/cards`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: this.props.token
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.status === 201 ? this.setState({
        submitStatus: statuses.SUCCESS,
        business_name: '',
        contact_name: '',
        email: '',
        phone: '',
        address: '',
        fax: '',
        web_url: ''
      }) : this.setState({ submitStatus: statuses.FAILED }))
      .catch(() => this.setState({ submitStatus: statuses.FAILED }));

  }

  handleChange = (text, field) => {

    this.setState({
      [field]: text,
      badLogin: false
    });

  }

  render() {

    const { business_name, contact_name, email, phone, address, fax, web_url, submitStatus } = this.state;

    return (

      <View>

        <View style={styles.field}>

          <Text style={styles.label}>Business Name <Text style={{color: 'red'}}>*</Text>:</Text>

          <TextInput
            value={business_name}
            onChangeText={text => this.handleChange(text, 'business_name')}
            style={styles.input}
          />

        </View>

        <View style={styles.field}>

          <Text style={styles.label}>Contact Name <Text style={{color: 'red'}}>*</Text>:</Text>

          <TextInput
            value={contact_name}
            onChangeText={text => this.handleChange(text, 'contact_name')}
            style={styles.input}
          />

        </View>

        <View style={styles.field}>

          <Text style={styles.label}>Email <Text style={{color: 'red'}}>*</Text>:</Text>

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
          onPress={this.handleSubmit}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Add Card!</Text>
        </Button>

        </View>

        { submitStatus === statuses.FAILED && <Text style={styles.failTxt}>There was a problem adding this business card.</Text> }

        { submitStatus === statuses.SUCCESS && <Text style={styles.successTxt}>Success!</Text> }

      </View>

    );

  }

}

const stateToProps = state => ({
  token: state.token
});

export default connect(stateToProps, null)(AddCardForm);
