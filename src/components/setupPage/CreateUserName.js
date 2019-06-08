import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { EditUserName, } from './common';

class CreateUserName extends Component{
  state = { username: '' };

  render() {
    return (
      <View>
        <EditUserName
          placeholder='Username'
          headerText='USERNAME'
          subHeaderText='Change your username for your account. You can always change it later on.'
          onChangeText={username => this.setState({ username })}
        />
        <Text style={styles.textStyle}>
          Already have an account?
        </Text>

        <TouchableHighlight
          onPress={() => this.props.navigation.navigate('SignIn')}
        >
          <Text style={styles.textButton}>Log in</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = {
  textStyle: {
    fontSize: 10,
    top: 550,
    marginLeft: 80,
    color: 'gray',
  },
  textButton: {
    color: 'black',
    fontSize: 10,
    top: 538,
    marginLeft: 250,
    fontFamily: 'Avenir',
  }
};

export default CreateUserName;
