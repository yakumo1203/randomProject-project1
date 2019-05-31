import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TouchableHighlight, Text, View, StyleSheet, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { SignInSection, Spinner } from './common';
import Router from '../../Router';
import {
  signupUser,
  signupEmailChanged,
  signupPasswordChanged
} from '../../actions';

class SignUp1 extends Component {
  onEmailChange(text) {
    this.props.signupEmailChanged(text);
  }

  onPasswordChange(text) {
    this.props.signupPasswordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.signupUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner />;
    }
    return (
      <Button
        title='Sign Up'
        type='outline'
        onPress={this.onButtonPress.bind(this)}
      />
    );
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={styles.errorText}>
          <Text style={{ color: 'red' }}>
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
          onChangeText={this.onEmailChange.bind(this)}
          value={this.props.email}
        />
        <TextInput
          style={textInput}
          placeholder="Password"
          secureTextEntry
          onChangeText={this.onPasswordChange.bind(this)}
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
  errorText: {
    top: 265,
    alignSelf: 'center'
  }
});

const mapStateToProps = ({ signUp }) => {
  const { email, password, loading, error } = signUp;
  return { email, password, loading, error };
};

export default connect(mapStateToProps, {
  signupEmailChanged,
  signupPasswordChanged,
  signupUser
})(SignUp1);
