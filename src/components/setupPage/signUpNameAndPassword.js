import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { TouchableHighlight, Text, View, StyleSheet, TextInput } from 'react-native';
import { SignInSection } from './common';
import Router from '../../Router';

class SignUpNameAndPassword extends Component {
  render() {
    const { title1, textInput, text1, text2, registerPage, button1 } = styles;

    return (
      <View>
        <Text style={title1}>NAME AND PASSWORD</Text>

        <TextInput
          style={textInput}
          placeholder="Full Name"
          returnKeyLabel={'next'}
          onChangeText={(text) => this.setState({ fullname: text })}
        />
        <TextInput
          style={textInput}
          placeholder="Password"
          secureTextEntry
          returnKeyLabel={'next'}
          onChangeText={(text) => this.setState({ username: text })}
        />

        <Text style={text1}>
          Passwords must include at least 6 characters
        </Text>
        <Text style={text2}>Save Password</Text>

        <SignInSection
          text='Continue and sync contacts'
          onPress={() => this.onClickListener('next')}
          signInStyle={{ top: 400 }}
        />

        <TouchableHighlight
          style={registerPage}
          onPress={() => Actions.schoolAndMajor()}
        >
          <Text style={button1}>Continue without Syncning Contacts</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  text1: {
    fontSize: 10,
    top: 270,
    color: 'red',
    marginLeft: 60,
    fontFamily: 'Avenir',
  },
  text2: {
    fontSize: 10,
    top: 280,
    color: '#C9C9C9',
    marginLeft: 100,
  },
  registerPage: {
    top: 400,
    alignItems: 'center',
  },
  button1: {
    color: '#00CCFF',
  },
});

export default SignUpNameAndPassword;
