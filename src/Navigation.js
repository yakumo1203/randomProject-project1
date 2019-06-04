import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { MainScreen } from './components/main/MainScreen';

class Navigation extends Component {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = StackNavigator({

  Main: {
    Screen: MainScreen,
  },
});

export default Navigation;
