import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Container, Header, Left, Button, Icon, Body, Right, Card, Content, CardItem } from 'native-base';

class MyLists extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button style={{ backgroundColor: 'transparent' }} onPress={() => this.props.navigation.goBack()} >
              <Icon name='arrow-back' style={{ color: 'gray' }}/>
            </Button>
          </Left>
          <Body>
            <Text>My Lists</Text>
          </Body>
          <Right>
          </Right>
        </Header>

        <Content>
          <TouchableOpacity>
          <Card>
          <View>
            <Image source={require('../../../img/ArizonaStateUniversity/FORIS_ASU.jpg')}
                   style={{ height: 200 }}/>
            <View style={{ paddingLeft: 15, paddingTop: 10, flexDirection: 'row' }}>
              <Text style={{ fontSize: 20, fontWeight: '400', fontSize: 17 }}>
                Arizona State University
              </Text>
              <Icon name='checkmark' style={{ position: 'absolute', right: 10, top: 5, color: '#00ccff' }}/>
            </View>
            <View style={{ paddingLeft: 15, paddingBottom: 10, paddingTop: 10 }}>
              <Text style={{ color: 'gray' }}>
                diciucoerwouhvrou
                cuboeubhvuh
                dwwvoubob
                wvdoub
              </Text>
            </View>

            <View style={{ paddingLeft: 15, flexDirection: 'row' }}>
              <Text style={{ color: 'gray'}}>Reviews: </Text>
              <Text>166 {'\n'}</Text>
            </View>

          </View>
          </Card>
          </TouchableOpacity>

          <TouchableOpacity>
          <Card>
          <View>
            <Image source={require('../../../img/Embry-RiddleAeronauticalUniversity/FORIS_ERAU.jpg')}
                   style={{ height: 200 }}/>
            <View style={{ paddingLeft: 15, paddingTop: 10, flexDirection: 'row' }}>
              <Text style={{ fontSize: 20, fontWeight: '400', fontSize: 17 }}>
                Embry-Riddle Aeronautical University
              </Text>
              <Icon name='checkmark' style={{ position: 'absolute', right: 10, top: 5, color: '#00ccff' }}/>
            </View>
            <View style={{ paddingLeft: 15, paddingBottom: 10, paddingTop: 10 }}>
              <Text style={{ color: 'gray' }}>
                diciucoerwouhvrou
                cuboeubhvuh
                dwwvoubob
                wvdoub
              </Text>
            </View>

            <View style={{ paddingLeft: 15, flexDirection: 'row' }}>
              <Text style={{ color: 'gray'}}>Reviews: </Text>
              <Text>166 {'\n'}</Text>
            </View>

          </View>
          </Card>
          </TouchableOpacity>

        </Content>
      </Container>
    );
  }
}

export default MyLists;
