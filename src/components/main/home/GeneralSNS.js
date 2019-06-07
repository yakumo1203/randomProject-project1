import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import { Icon, Container, Content } from 'native-base';
import CardComponent from '../home/CardComponent.js';

class homeGeneralSNS extends Component {

  static navigationOptions = {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-home" style={{ color: tintColor }} />
      )
  }

  render() {
    return (
      <Container style={{ flex: 1, backgroundColor: 'white' }}>
        <Content>
          <CardComponent />
        </Content>
      </Container>
    );
  }
}

export default homeGeneralSNS;
