import React, { Component } from 'react';
import { TouchableHighlight, Alert, ScrollView, ImageBackground, Image, Text, View, AppRegistry, StyleSheet, Button, TextInput } from 'react-native';

export default class signUnAfter extends Component{
  render(){
    return(
      <View>
        <ImageBackground source={require('../project1/ImageForis1.jpg')} style={{width: '100%', height: '100%'}}>
        <View>
          <Text style={styles.text1}>
            Success!
          </Text>
        </View>

        <View>
          <Text style={styles.text2}>
            Welcome to FORIS
          </Text>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('Login')}>
          <Text style={styles.loginText}>Continue</Text>
        </TouchableHighlight>

        </ImageBackground>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  text1: {
    fontSize: 30,
    color: 'white',
    top: 200,
    textAlign: 'center',
  },

  text2: {
    fontSize: 30,
    color: 'white',
    top: 250,
    textAlign: 'center',
  },

  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    top: 450,
    marginLeft: 60,
  },

  textInputContainer:{
    borderBottomColor: 'white',
    backgroundColor: 'white',
    borderRadius:30,
    borderBottomWidth: 1,
    width:250,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center',
    top: 450,
    marginLeft: 60,
  },

  loginButton: {
    backgroundColor: 'gray',
  },

  loginText: {
    color: 'white',
  },
});

//AppRegistry.registerComponent('project1', () => signUnAfter );
