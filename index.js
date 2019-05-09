import React, { Component } from 'react';
import { TouchableHighlight, Alert, ScrollView, ImageBackground, Image, Text, View, AppRegistry, StyleSheet, Button, TextInput } from 'react-native';

export default class changeUsername extends Component{
  render(){
    return(
      <View>
        <Text style={styles.text1}>
          CHANGE USERNAME
        </Text>

        <Text style={styles.text2}>
          Change your username for your account. You can always change it later on.
        </Text>

        <TextInput
          style={styles.textUsernameInput}
          placeholder="Username"
          returnKeyLabel = {"next"}
          onChangeText={(text) => this.setState({username: text})}/>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('next')}>
          <Text style={styles.loginText}>Next</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles=StyleSheet.create({
  text1: {
    fontSize: 20,
    textAlign: 'center',
    top: 200,
    color: 'black',
    fontFamily: 'Avenir',
  },

  text2: {
    fontSize: 15,
    textAlign: 'center',
    marginLeft: 60,
    marginRight: 60,
    color: 'black',
    top: 300,
  },

  textUsernameInput: {
    top: 350,
    marginLeft: 60,
    marginRight: 60,
    borderBottomWidth: 1,
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
    backgroundColor: '#00CCFF',
  },

  loginText: {
    color: 'white',
  },
})
AppRegistry.registerComponent('project1', () => changeUsername );
