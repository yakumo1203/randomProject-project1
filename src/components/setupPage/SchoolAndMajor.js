import React, { Component } from 'react';
import { TouchableHighlight, Text, View, StyleSheet, TextInput } from 'react-native';

class SchoolAndMajor extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text1}>SCHOOL</Text>

        <TextInput
          style={styles.textUsernameInput1}
          placeholder="school"
          returnKeyLabel={'next'}
          onChangeText={(text) => this.setState({ username: text })}
        />

        <Text style={styles.text2}>MAJOR</Text>

        <TextInput
          style={styles.textUsernameInput2}
          placeholder="major"
          returnKeyLabel={'next'}
          onChangeText={(text) => this.setState({ username: text })}
        />

        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.onClickListener('next')}
        >
          <Text style={styles.loginText}>Next</Text>
        </TouchableHighlight>

        <Text style={styles.text3}>Already have an account?</Text>

        <TouchableHighlight onPress={() => this.onClickListener('next')}>
          <Text style={styles.textButton}>Log in </Text>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  text1: {
    fontSize: 20,
    textAlign: 'center',
    top: 200,
    color: 'black',
    fontFamily: 'Avenir',
  },

  text2: {
    fontSize: 20,
    textAlign: 'center',
    marginLeft: 60,
    marginRight: 60,
    color: 'black',
    top: 310,
  },

  text3: {
    fontSize: 10,
    top: 550,
    marginLeft: 80,
    color: 'gray',
  },

  textUsernameInput1: {
    top: 250,
    marginLeft: 60,
    marginRight: 60,
    borderBottomWidth: 1,
  },

  textUsernameInput2: {
    top: 350,
    marginLeft: 60,
    marginRight: 60,
    borderBottomWidth: 1,
  },

  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    top: 450,
    marginLeft: 60,
  },

  loginButton: {
    backgroundColor: '#00CCFF',
  },

  loginText: {
    color: 'white',
  },

  textButton: {
    color: 'black',
    fontSize: 10,
    top: 538,
    marginLeft: 250,
    fontFamily: 'Avenir',
  },
});

export default SchoolAndMajor;
