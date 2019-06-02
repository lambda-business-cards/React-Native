import React from 'react';
import { Text, TextInput, View, TouchableOpacity as Button } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

import styles from './styles';
import globalStyles from '../../globalStyles';
import { fetchMyData } from '../../redux/actions';

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

  componentDidMount() {

    if (this.props.mode === 'update') {

      const { card } = this.props;

      this.setState({
        business_name: card.business_name,
        contact_name: card.contact_name,
        email: card.email,
        phone: card.phone,
        address: card.address,
        fax: card.fax,
        web_url: card.web_url
      });

    }

  }

  handleSubmit = () => {

    if (this.props.mode !== 'update') {

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
        .then(() => this.props.fetchMyData())
        .catch(() => this.setState({ submitStatus: statuses.FAILED }));

    }

    else {

      fetch(`${process.env.SERVER_URL}/api/cards/${this.props.card.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: this.props.token
        },
        body: JSON.stringify(this.state)
      })
        .then(res => res.status === 200 ? this.setState({
          submitStatus: statuses.SUCCESS,
          business_name: '',
          contact_name: '',
          email: '',
          phone: '',
          address: '',
          fax: '',
          web_url: ''
        }) : this.setState({ submitStatus: statuses.FAILED }))
        .then(() => {

          this.props.fetchMyData(this.props.token)
            .then(() => this.props.navigation.goBack());

        })
        .catch(() => this.setState({ submitStatus: statuses.FAILED }));

    }

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
          style={globalStyles.button}
        >
          <Text style={globalStyles.buttonText}>{this.props.mode === 'update' ? 'Update Card' : 'Add Card'}</Text>
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

export default connect(stateToProps, { fetchMyData })(withNavigation(AddCardForm));
