import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import { Icon, Container, Content, Header, Left, Right, Body, Button } from 'native-base';
import EntypoIcon from 'react-native-vector-icons/Entypo';

class MainAccount extends Component {
  render() {
    return (
      <Container style={{ flex: 1, backgroundColor: 'white' }} >
        <Header>
          <Left><Icon name="ios-camera-outline" style={{ paddingLeft: 10 }}></Icon></Left>
          <Body><Text>FORIS General</Text></Body>
          <Right><EntypoIcon name="back-in-time" style={{ paddingRight: 10, fontSize: 32 }}></EntypoIcon></Right>
        </Header>

        <Content style={{ paddingTop: 10 }}>
          <View>
            <View style={{ flexDirection: 'row' }}>

              <View style={{ flex: 1 }}>
                <Image source={require('../../../img/FORIS_Aviation.jpg')}
                       style={{ width: 75, height: 75, borderRadius: 37.5 }} />
              </View>

              <View style={{ flex: 3 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                  <View>
                    <Text>20</Text>
                    <Text style={{ fontSize: 10, color: 'gray' }}>posts</Text>
                  </View>
                  <View>
                    <Text>200</Text>
                    <Text style={{ fontSize: 10, color: 'gray' }}>followers</Text>
                  </View>
                  <View>
                    <Text>167</Text>
                    <Text style={{ fontSize: 10, color: 'gray' }}>following</Text>
                  </View>

                </View>
              </View>
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}

export default MainAccount;
