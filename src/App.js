import firebase from 'firebase';
import React, {Component} from 'react';
import { View, Text } from 'react-native';
import CreateUserName from './components/setupPage/CreateUserName';

class App extends Component {
  render() {
    return (
      <CreateUserName />
    );
  }
}

export default App;
