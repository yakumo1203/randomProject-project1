import React, { Component } from 'react';
import { Text, View, AppRegistry, StyleSheet, Button, TextInput } from 'react-native';

export default class signUp3 extends Component{
  constructor(props){
    super(props)

    this.state = {
      name: '',
      email: '',
      school: '',
      major: '',
      activity: '',
    }
  }

  render(){
    return(
      <View>
        <View>
          <Text style={styles.text1}>
            SIGN UP
          </Text>
        </View>
        <View>
          <Text style={styles.textUsername}>
            Username:
          </Text>
          <TextInput
            style={styles.textUsernameInput}
            placeholder="Type your Username here"
            returnKeyLabel = {"next"}
            onChangeText={(text) => this.setState({username: text})}/>
          <Text style={styles.textPassword}>
            Password:
          </Text>
          <TextInput
            style={styles.textPasswordInput}
            placeholder="Type your Password here"
            returnKeyLabel = {"next"}
            onChangeText={(text) => this.setState({password: text})}/>
          <Text style={styles.textRePassword}>
            RePassword:
          </Text>
          <TextInput
            style={styles.textRePasswordInput}
            placeholder="Type your Password here again"
            returnKeyLabel = {"next"}
            onChangeText={(text) => this.setState({repassword: text})}/>

          <View style={{top: 450}}>
            <Button onPress={this._onPressButton} title="Start your journey" color='blue'/>
          </View>
        </View>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  text1: {
    fontSize: 40,
    textAlign: 'center',
    top: 150,
  },

  textUsername: {
    fontSize: 15,
    marginLeft: 60,
    color: 'gray',
    top: 350,
  },

  textPassword: {
    fontSize: 15,
    marginLeft: 60,
    color: 'gray',
    top: 370,
  },

  textRePassword: {
    fontSize: 15,
    marginLeft: 60,
    color: 'gray',
    top: 390,
  },

  textUsernameInput: {
    top: 330,
    marginLeft: 160,
    marginRight: 60,
    borderBottomWidth: 1,
  },

  textPasswordInput: {
    top: 350,
    marginLeft: 160,
    marginRight: 60,
    borderBottomWidth: 1,
  },

  textRePasswordInput: {
    top: 370,
    marginLeft: 160,
    marginRight: 60,
    borderBottomWidth: 1,
  },

})
//AppRegistry.registerComponent('project1', () => signUp3);
