import React, { Component } from 'react';
import { View } from 'react-native';
import { EditUserName } from './common';

class ChangeUserName extends Component {
  state = { username: '' };

  render() {
    return (
      <View>
        <EditUserName
          placeholder='New username'
          headerText='CHANGE USERNAME'
          subHeaderText='Change your username for your account. You can always change it later on.'
          onChangeText={username => this.setState({ username })}
        />
      </View>
    );
  }
}

export default ChangeUserName;
