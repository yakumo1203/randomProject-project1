import React, { Component } from 'react';
import { Text, View, AppRegistry, StyleSheet, Button, TextInput } from 'react-native';

// Newstudentから欲しい情報をもっと記入せなあかんから、それを加えていく
// 最終的にはその内容をSignUp3に繋げる。

export default class signUp2 extends Component{
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
          <Text style={styles.textName}>
            Name:
          </Text>
          <TextInput
            style={styles.textNameInput}
            placeholder="Type your name here"
            returnKeyLabel = {"next"}
            onChangeText={(text) => this.setState({name: text})}/>
          <Text style={styles.textEmail}>
            Email:
          </Text>
          <TextInput
            style={styles.textEmailInput}
            placeholder="Type your Email here"
            returnKeyLabel = {"next"}
            onChangeText={(text) => this.setState({email: text})}/>
          <Text style={styles.textSchool}>
            School:
          </Text>
          <TextInput
            style={styles.textSchoolInput}
            placeholder="Type your School here"
            returnKeyLabel = {"next"}
            onChangeText={(text) => this.setState({school: text})}/>
          <Text style={styles.textMajor}>
            Major:
          </Text>
          <TextInput
            style={styles.textMajorInput}
            placeholder="Type your Major here"
            returnKeyLabel = {"next"}
            onChangeText={(text) => this.setState({major: text})}/>
          <Text style={styles.textActivity}>
            Activity:
          </Text>
          <TextInput
            style={styles.textActivityInput}
            placeholder="Type your Activity here"
            returnKeyLabel = {"next"}
            onChangeText={(text) => this.setState({activity: text})}/>
          <View style={{top: 450}}>
            <Button onPress={this._onPressButton} title="Next" color='blue'/>
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

  textName: {
    fontSize: 15,
    marginLeft: 60,
    color: 'gray',
    top: 300,
  },

  textEmail: {
    fontSize: 15,
    marginLeft: 60,
    color: 'gray',
    top: 310,
  },

  textSchool: {
    fontSize: 15,
    marginLeft: 60,
    color: 'gray',
    top: 320,
  },

  textMajor: {
    fontSize: 15,
    marginLeft: 60,
    color: 'gray',
    top: 330,
  },

  textActivity: {
    fontSize: 15,
    marginLeft: 60,
    color: 'gray',
    top: 340,
  },

  textNameInput: {
    top: 280,
    marginLeft: 130,
    marginRight: 60,
    borderBottomWidth: 1,
  },

  textEmailInput: {
    top: 290,
    marginLeft: 130,
    marginRight: 60,
    borderBottomWidth: 1,
  },

  textSchoolInput: {
    top: 300,
    marginLeft: 130,
    marginRight: 60,
    borderBottomWidth: 1,
  },

  textMajorInput: {
    top: 310,
    marginLeft: 130,
    marginRight: 60,
    borderBottomWidth: 1,
  },

  textActivityInput: {
    top: 320,
    marginLeft: 130,
    marginRight: 60,
    borderBottomWidth: 1,
  },
})
