import React, { Component } from 'react';
import { TouchableHighlight, Alert, ScrollView, ImageBackground, Image, Text, View, AppRegistry, StyleSheet, Button, TextInput } from 'react-native';

export default class signIn extends Component{
  constructor(props) {
    super(props);
    state = {
      username: '',
      password: '',
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Warning", "You entered invalid username or password. "+viewId);
  }

  render(){
    return(
      <View>
        <ImageBackground source={require('../project1/ImageForis1.jpg')} style={{width: '100%', height: '100%'}}>
        <Text style={styles.title1}>
          Sign in
        </Text>

        <Text style={styles.text1}>
          for your own account
        </Text>

        <Text style={styles.text2}>
          Enter your username and password.
        </Text>

        <View style={styles.textInputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput
            style={styles.inputs}
            placeholder="username"
            returnKeyLabel = {"next"}
            onChangeText={(username) => this.setState({username})}/>
        </View>

        <View style={styles.textInputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput
            style={styles.inputs}
            placeholder="password"
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('Login')}>
          <Text style={styles.loginText}>Sign in</Text>
        </TouchableHighlight>

        <View>
          <Text style={styles.registerWith}>
          </Text>
        </View>

        <View>
          <Text style={styles.text3}>
            Don't have an account?
          </Text>
        </View>

        <TouchableHighlight style={styles.registerPage} onPress={() => this.onClickListener('goToRegister')}>
          <Text style={styles.button1}> Create one</Text>
        </TouchableHighlight>
        </ImageBackground>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  title1: {
    fontSize: 50,
    textAlign: 'center',
    top: 80,
    color: 'white',
  },

  text1: {
    fontSize: 15,
    textAlign: 'center',
    top: 85,
    color: 'white',
  },

  text2:{
    fontSize: 18,
    textAlign: 'center',
    top: 120,
    color: 'white',
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
    top: 180,
    marginLeft: 60,
  },

  inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: 'white',
    flex:1,
  },

  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },

  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    top: 220,
    marginLeft: 60,
  },

  loginButton: {
    backgroundColor: "white",
  },

  registerWith: {
    textAlign: 'center',
    top: 200,
    marginLeft: 30,
    marginRight: 30,
    color: 'white',
    fontSize: 20,
  },

  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },

  loginText: {
    color: 'black',
  },

  text3: {
    fontSize: 15,
    top: 270,
    marginLeft: 60,
    color: 'white',
  },

  registerPage: {
    top: 253,
    marginLeft: 250,
    marginRight: 40,
  },

  button1: {
    color: 'white',
  },
})
