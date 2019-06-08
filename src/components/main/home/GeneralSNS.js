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
          <Left><Icon name="ios-camera-outline" style={{ paddingLeft: 10 }}></Icon></Left>
          <Body><Text>FORIS General</Text></Body>
          <Right><Icon name="ios-send-outline" style={{ paddingRight: 10 }}></Icon></Right>
        </Header>
        <Content>
          <View style={{ height: 100 }}>
            <View style={{ flex: 1,
                           flexDirection: 'row',
                           justifyContent: 'space-between',
                           alignItems: 'center',
                           paddingHorizontal: 7 }}>
              <Text>Stories</Text>
              <Text>Watch all</Text>
            </View>

            <View style={{ flex: 3 }}>
              <ScrollView horizontal
                          contentContainerStyle={{ alignItems: 'center', paddingStart: 5, paddingEnd: 5 }}>
                <Thumbnail source={require('../../../img/FORIS_ComputerScience.jpg')}
                           style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }} />
                <Thumbnail source={require('../../../img/FORIS_ComputerScience.jpg')}
                           style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }} />
                <Thumbnail source={require('../../../img/FORIS_ComputerScience.jpg')}
                           style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }} />
                <Thumbnail source={require('../../../img/FORIS_ComputerScience.jpg')}
                           style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }} />
              </ScrollView>
            </View>
          </View>
          <CardComponent imageSource="1" likes="101" />
          <CardComponent imageSource="2" likes="201" />
          <CardComponent imageSource="3" likes="301" />
        </Content>
      </Container>
    );
  }
}

export default homeGeneralSNS;
