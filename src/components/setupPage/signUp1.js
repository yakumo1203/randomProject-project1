import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TouchableHighlight, Text, View, StyleSheet, TextInput } from 'react-native';
import { userProfileCreate, userEmailChanged, userPasswordChanged } from '../../actions';
import { SignInSection } from './common';
import Router from '../../Router';

class SignUp1 extends Component {
  onUserEmailChanged(text) {
    this.props.userEmailChanged(text);
  }

  onUserPasswordChanged(text) {
    this.props.userPasswordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.userProfileCreate({ email, password });
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorStyle}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  render() {
    const { title1, textInput, registerPage, button1 } = styles;

    return (
      <View>
        <Text style={title1}>Email and password</Text>

        <TextInput
          style={textInput}
          placeholder="user@email.com"
          onChangeText={this.onUserEmailChanged.bind(this)}
          value={this.props.email}
        />
        <TextInput
          style={textInput}
          placeholder="Password"
          secureTextEntry
          onChangeText={this.onUserPasswordChanged.bind(this)}
          value={this.props.password}
        />

        {this.renderError()}

        <SignInSection
          text='Continue and sync contacts'
          onPress={this.onButtonPress.bind(this)}
          signInStyle={{ top: 400 }}
        />

        <TouchableHighlight
          style={registerPage}
          onPress={this.onButtonPress.bind(this)}
        >
          <Text style={button1}>Continue without Syncning Contacts</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  errorStyle: {
    alignSelf: 'center',
    color: 'red'
  },
  title1: {
    fontSize: 20,
    top: 200,
    textAlign: 'center',
    color: 'black',
  },
  textInput: {
    top: 300,
    marginLeft: 60,
    marginRight: 60,
    marginBottom: 40,
    borderBottomWidth: 1,
  },
  registerPage: {
    top: 400,
    alignItems: 'center',
  },
  button1: {
    color: '#00CCFF',
  },
});

const mapStateToProps = (userProfile) => {
  const { email, password } = userProfile;
  return { email, password };
};

export default connect(
  mapStateToProps, {
  userProfileCreate,
  userEmailChanged,
  userPasswordChanged
  }
)(SignUp1);
