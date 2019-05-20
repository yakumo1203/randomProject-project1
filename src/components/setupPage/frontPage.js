import React, { Component } from 'react';
import { ImageBackground, Text, View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Router from '../../Router';
import { SignInSection } from './common';

class FrontPage extends Component {
    render() {
      return (
        <View>
          <ImageBackground
            source={require('../../img/ImageForis1.jpg')}
            style={{ width: '100%', height: '100%' }}
          >
            <Text style={styles.title}>FORIS</Text>

            <Text style={styles.sub}>For International Students</Text>

            <Text style={styles.text}>留学に、革命を。</Text>

            <SignInSection
              text='Log in'
              onPress={() => Actions.signIn()}
              signInStyle={{ top: 400 }}
            />
            <SignInSection
              text='Create user'
              onPress={() => Actions.signUp1()}
              signInStyle={{ top: 400 }}
            />
          </ImageBackground>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    color: 'white',
    top: 160,
    textAlign: 'center',
  },
  sub: {
    fontSize: 20,
    color: 'white',
    top: 170,
    textAlign: 'center',
  },
  text: {
    fontSize: 30,
    top: 300,
    textAlign: 'center',
    color: 'white',
  },
  loginText: {
    color: 'white',
  },
});

export default FrontPage;
