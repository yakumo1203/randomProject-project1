import React, { Component } from 'react';
import {
  TouchableHighlight,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';

const EditUserName = ({ placeholder, headerText, subHeaderText, onChangeText }) => {
  const { text1, text2, text3, textUsernameInput, buttonContainer, loginButton, textButton, loginText } = styles;

  return(
      <View>
        <Text style={styles.text1}>{headerText}</Text>
        <Text style={styles.text2}>{subHeaderText}</Text>
        <TextInput
          style={styles.textUsernameInput}
          placeholder={placeholder}
          returnKeyLabel = {"next"}
          onChangeText={onChangeText}
        />
        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.onClickListener('next')}>
          <Text style={loginText}>Next</Text>
        </TouchableHighlight>
      </View>
    );
  };


const styles = {
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
    color: 'white'
  }
};

export { EditUserName };
