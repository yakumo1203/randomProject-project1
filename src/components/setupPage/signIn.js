import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { ImageBackground, Image, Text, View, StyleSheet, TextInput, TouchableHighlight } from 'react-native';
import { SignInSection, GoBack } from './common';
import Router from '../../Router';

class SignIn extends Component {
  state = { username: '', password: '' };

  render() {
    const { title1, text2, textInputContainer, inputs, inputIcon } = styles;

    return (
      <ImageBackground
        source={require('../../img/ImageForis1.jpg')}
        style={{ width: '100%', height: '100%' }}
      >
        <View /* style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', height: '100%' }} */>

          <Text style={title1}>Sign in{'\n'}for your own account</Text>

          <Text style={text2}>
            Enter your username and password.
          </Text>

          <View style={textInputContainer}>
            <Image
              style={inputIcon}
              source={{ uri: 'https://png.icons8.com/message/ultraviolet/50/3498db' }}
            />
            <TextInput
              style={inputs}
              placeholder='username'
              returnKeyLabel={'next'}
              onChangeText={(username) => this.setState({ username })}
            />
          </View>

          <View style={textInputContainer}>
            <Image
              style={inputIcon}
              source={{ uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db' }}
            />
            <TextInput
              style={inputs}
              placeholder="password"
              secureTextEntry
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({ password })}
            />
          </View>
          <SignInSection
            text='Sign in'
            onPress={() => this.onClickListener('Login')}
            signInStyle={{ top: 220 }}
          />

          <TouchableHighlight
            style={{ top: 220, alignItems: 'center' }}
            onPress={() => Actions.signUp1()}
          >
            <Text style={{ color: 'black' }} >Don't have an accout?</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  title1: {
    fontSize: 50,
    textAlign: 'center',
    top: 80,
    color: 'white',
  },
  text2: {
    fontSize: 18,
    textAlign: 'center',
    top: 120,
    color: 'white',
  },
  textInputContainer: {
    borderBottomColor: 'white',
    backgroundColor: 'white',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    top: 180,
    marginLeft: 60,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: 'white',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center'
  },
});

export default SignIn;
