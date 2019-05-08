import React, { Component } from 'react';
import { TouchableHighlight, Alert, ScrollView, ImageBackground, Image, Text, View, AppRegistry, StyleSheet, Button, TextInput } from 'react-native';

export default class frontPage extends Component{
    render(){
      return(
        <View>
          <ImageBackground source={require('../project1/ImageForis1.jpg')} style={{width: '100%', height: '100%'}}>
          <Text style={styles.title}>
            FORIS
          </Text>

          <Text style={styles.sub}>
            For International Students
          </Text>

          <Text style={styles.text}>
            留学に、革命を。
          </Text>

          <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('SIGN IN')}>
            <Text style={styles.loginText}>Sign in</Text>
          </TouchableHighlight>

          <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('SIGN UP')}>
            <Text style={styles.loginText}>Sign up</Text>
          </TouchableHighlight>
          </ImageBackground>
        </View>
      );
    }
}

const styles=StyleSheet.create({
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

  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    top: 400,
    marginLeft: 60,
  },

  loginButton: {
    backgroundColor: 'gray',
  },

  loginText: {
    color: 'white',
  },
})

//AppRegistry.registerComponent('project1', () => frontPage );
