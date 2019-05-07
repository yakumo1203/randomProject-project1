import React, { Component } from 'react';
import { Text, View, AppRegistry, StyleSheet, Button, TextInput } from 'react-native';

export default class Register1 extends Component{
  render(){
    return(
      <View>
        <View>
          <Text style={styles.text1}>
            SIGN UP
          </Text>
        </View>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  text1: {
    fontSize: 40,
    textAlign: 'center',
    top: 150,
  }
})
AppRegistry.registerComponent('project1', () => Register1);
