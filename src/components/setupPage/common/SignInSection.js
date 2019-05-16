import React, { Component } from 'react';
import { TouchableHighlight, Text } from 'react-native';

const SignInSection = ({ text, onPress, top }) = {
  const { loginText, loginButton } = styles;

  return (
    <TouchableHighlight
      style={loginButton}
      onPress={onPress}
    >
      <Text style={loginText}>{text}</Text>
    </TouchableHighLight>
  );
}

const styles = {
  loginText: {
    color: 'black',
  },
  loginButton: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    top: parseInt({top}, 10),
    marginLeft: 60,
    color: 'white'
  }
};
