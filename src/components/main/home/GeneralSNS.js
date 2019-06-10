import React, { Component } from 'react';
import { AppRegistry, View, Text, ScrollView } from 'react-native';
import { Icon, Container, Content, Thumbnail, Header, Left, Right, Body } from 'native-base';
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
        <Header>
          <Left><Icon name="ios-camera" style={{ paddingLeft: 10 }}></Icon></Left>
          <Body><Text>FORIS General</Text></Body>
          <Right><Icon name="ios-send" style={{ paddingRight: 10 }}></Icon></Right>
        </Header>
        <Content>

          <CardComponent imageSource="1" likes="101" />
          <CardComponent imageSource="2" likes="201" />
          <CardComponent imageSource="3" likes="301" />
        </Content>
      </Container>
    );
  }
}

export default homeGeneralSNS;
