import React, { Component } from 'react';
import { TouchableHighlight, Alert, ScrollView, ImageBackground, Image, Text, View, AppRegistry, StyleSheet, Button, TextInput } from 'react-native';

export default class signUnAfter extends Component{
  render(){
    return(
      <View>
        <View>
          <Text style={styles.text1}>
            Success!
          </Text>
        </View>

        <View>
          <Text style={styles.text2}>
            Welcome to FORIS,
          </Text>
        </View>

        <View>
          <Text style={styles.text3}>
            FORISはあなたの留学を応援します。
          </Text>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('next')}>
          <Text style={styles.loginText}>Next</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.registerPage} onPress={() => this.onClickListener('username')}>
          <Text style={styles.button1}> Change Username</Text>
        </TouchableHighlight>


        <Text style={styles.text4}>
          By clicking Next, you agree with our
        </Text>

        <TouchableHighlight style={{alignItems: 'center'}}>
          <Text style={styles.button2}>
            UseOfTerms
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles=StyleSheet.create({
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
    backgroundColor: '#00CCFF',
  },

  loginText: {
    color: 'white',
  },

  registerPage: {
    top: 400,
    alignItems: 'center',
  },

  button1: {
    color: '#00CCFF',
  },

  button2: {
    color: 'black',
    fontSize: 10,
    alignItems: 'center',
    top: 500,
  },
});

//AppRegistry.registerComponent('project1', () => signUpAfter );
