import React from 'react';
import { TouchableHighlight, Text } from 'react-native';

const SignInSection = ({ text, onPress, signInStyle }) => {
  return (
    <TouchableHighlight
      style={[styles.loginButton, signInStyle]}
      onPress={onPress}
    >
      <Text style={{ color: 'white' }}>{text}</Text>
    </TouchableHighlight>
  );
};

const styles = {
  loginButton: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    marginLeft: 60,
    backgroundColor: 'gray'
  },
};

export { SignInSection };
