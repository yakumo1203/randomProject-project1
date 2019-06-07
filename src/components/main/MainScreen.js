import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Icon } from 'native-base';
import { TabNavigator } from 'react-navigation';

import homeGeneralSNS from '../../components/main/MainScreen';
import Main from '../../components/main/info/Main';
import UniversityPage from '../../components/main/university/UniversityPage';

class MainScreen extends Component {

  static navigationOptions = {

    headerLeft: <Icon name="ios-camera-outline" style={{ paddingLeft: 10 }} />,
    title: "FORIS GENERAL",
    headerRight: <Icon name="ios-send-outline" style={{ paddingRight: 10 }} />,
  }

  render() {
    return (
      <AppTabNavigator />
    )
  }
}

export default MainScreen;

const AppTabNavigator = TabNavigator({

  homeGeneralSNS: {
    Screen: homeGeneralSNS,
  },

  Main: {
    Screen: Main,
  },

  UniversityPage: {
    Screen: UniversityPage,
  },

}, {
  animationEnabled: true,
  swipeEnabled: true,
  tabBarPosition: 'buttom',
});
