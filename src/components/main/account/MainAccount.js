import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import { Icon, Container, Content, Header, Left, Right, Body, Button } from 'native-base';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import CardComponent from '../home/CardComponent';

var images = [
  require('../../../img/FORIS_Aviation.jpg'),
  require('../../../img/FORIS_Aviation.jpg'),
  require('../../../img/FORIS_Aviation.jpg'),
  require('../../../img/FORIS_Aviation.jpg'),
  require('../../../img/FORIS_Aviation.jpg'),
  require('../../../img/FORIS_Aviation.jpg'),
]

var { width, height } = Dimensions.get('window');

class MainAccount extends Component {

  constructor(props) {
    super(props)

    this.state = {
      activeIndex: 0
    }
  }

  segmentClicked = (index) => {
    this.setState({
      activeIndex: index,
    })
  }

  renderSectionOne = () => {
    return images.map((image, index) => (
        <View key={index} style={[{ width: (width) / 3 }, { height: (width) / 3 },
              { marginBottom: 2 },
              index % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 }]}>
          <Image style={{ flex: 1, width: undefined, height: undefined }}
                 source={image}
          />
        </View>
      ))
  }

  renderSection = () => {
    if (this.state.activeIndex === 1) {
      return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {this.renderSectionOne()}
        </View>
      )
    }
    else if (this.state.activeIndex === 0) {
      return (
        <View>
          <CardComponent imageSource="1" likes="100" />
          <CardComponent imageSource="1" likes="100" />
          <CardComponent imageSource="3" likes="100" />
        </View>
      )
    }
  }

  render() {
    return (
      <Container style={{ flex: 1, backgroundColor: 'white' }} >
        <Header>
          <Left>
            <Icon name="ios-list" style={{ paddingLeft: 10, fontSize: 32, color: 'gray' }}
                      onPress={() => this.props.navigation.toggleDrawer()}>
            </Icon>
          </Left>
          <Body><Text style={{ fontWeight: '700', fontSize: 20 }}>FORIS</Text></Body>
          <Right><Icon name="ios-mail" style={{ paddingRight: 10, fontSize: 32, color: 'gray' }}
                       onPress={() => this.props.ss()}></Icon></Right>
        </Header>

        <Content>
          <View style={{ paddingTop: 10 }}>
            <View style={{ flexDirection: 'row' }}>

              <View style={{ flex: 1, paddingLeft: 20 }}>
                <Image source={require('../../../img/FORIS_Aviation.jpg')}
                       style={{ width: 75, height: 75, borderRadius: 37.5 }} />
              </View>

              <View style={{ flex: 2, flexDirection: 'column', paddingTop: 5 }}>
                <View>
                  <Text style={{ fontWeight: 'bold' }}>
                    Yakumo Asano <Text style={{ color: 'gold', fontFamily: 'Avenir' }}>  Honors</Text>
                  </Text>

                  <Text style={{ fontSize: 10, color: 'gray' }}>
                    Seattle Central College / Computer Science
                  </Text>
                </View>

                <View style={{ flex: 1 }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: 10 }}>
                    <View>
                      <Text>200</Text>
                      <Text style={{ fontSize: 10, color: 'gray' }}>followers  </Text>
                    </View>
                    <View>
                      <Text>167</Text>
                      <Text style={{ fontSize: 10, color: 'gray' }}>following</Text>
                    </View>
                    <Button bordered dark style={{ flex: 2, marginLeft: 10, justifyContent: 'center', height: 30, marginRight: 10, borderColor: 'gray' }}
                            onPress={() => this.EditProfile()}>
                      <Text style={{ color: 'gray' }}>Edit Profile</Text>
                    </Button>
                  </View>
                </View>
              </View>
            </View>

          <View style={{ flexDirection: 'row' }}>
            <View style={{ paddingBottom: 10, paddingHorizontal: 10, paddingTop: 10, paddingLeft: 10 }}>
              <Text style={{ fontWeight: 'bold' }}>Yakumo1203</Text>
            </View>
          </View>

          </View>

          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderWidth: 1, borderTopColor: '#eae5e5',
                           borderColor: '#eae5e5', borderBottomColor: '#eae5e5' }}>

              <Button transparent onPress={() => this.segmentClicked(0)} active={this.state.activeIndex === 0}>
                <Text style={[this.state.activeIndex === 0 ? { color: '#00ccff' } : { color: 'gray' }]}>Home</Text>
              </Button>

              <Button transparent onPress={() => this.segmentClicked(1)} active={this.state.activeIndex === 1}>
                <Text style={[this.state.activeIndex === 1 ? { color: '#00ccff' } : { color: 'gray' }]}>Comments</Text>
              </Button>

              <Button transparent onPress={() => this.segmentClicked(2)} active={this.state.activeIndex === 2}>
                <Text style={[this.state.activeIndex === 2 ? { color: '#00ccff' } : { color: 'gray' }]}>Likes</Text>
              </Button>

              <Button transparent onPress={() => this.segmentClicked(3)} active={this.state.activeIndex === 3}>
                <Text style={[this.state.activeIndex === 3 ? { color: '#00ccff' } : { color: 'gray' }]}>Lists</Text>
              </Button>

            </View>

            {this.renderSection()}

          </View>
        </Content>
      </Container>
    )
  }
}

export default MainAccount;
