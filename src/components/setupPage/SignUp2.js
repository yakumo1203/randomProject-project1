import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { TouchableHighlight, Text, View, StyleSheet } from 'react-native';
import { SignInSection } from './common';
import Router from '../../Router';

class SignUp2 extends Component {
  render() {
    const { text1, text2, text3, text4, button1, button2, registerPage } = styles;

    return (
      <View>
        <Text style={text1}>Success!</Text>
        <Text style={text2}>Welcome to FORIS,</Text>
        <Text style={text3}>FORISはあなたの留学を応援します。</Text>
        <SignInSection
          text='Next'
          signInStyle={{ backgroundColor: '#00CCFF' }}
          onPress={() => Actions.main()}
          signInStyle={{ top: 400 }}
        />
        <TouchableHighlight
          style={registerPage}
          onPress={() => Actions.changeUsername()}
        >
          <Text style={button1}>Change Username</Text>
        </TouchableHighlight>
        <Text style={text4}>
          By clicking Next, you agree with our
        </Text>
        <TouchableHighlight
          style={{ alignItems: 'center' }}
          onPress={() => Actions.useOfTerms()}
        >
          <Text style={button2}>UseOfTerms</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text1: {
    fontSize: 30,
    color: 'black',
    top: 200,
    textAlign: 'center',
  },
  text2: {
    fontSize: 30,
    color: 'black',
    top: 250,
    textAlign: 'center',
    fontFamily: 'Avenir',
  },
  text3: {
    fontSize: 15,
    color: 'black',
    top: 300,
    textAlign: 'center',
  },
  text4: {
    fontSize: 10,
    color: 'gray',
    top: 500,
    marginBottom: 10,
    textAlign: 'center',
  },
  button2: {
    color: 'black',
    fontSize: 10,
    alignItems: 'center',
    top: 500,
  },
  registerPage: {
   top: 400,
   alignItems: 'center',
  },
});

export default SignUp2;
