import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';

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
    if (this.state.activeIndex === 0) {
      return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {this.renderSectionOne()}
        </View>
      )
    }
    else if (this.state.activeIndex === 1) {
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
          <Left><Icon name="ios-camera-outline" style={{ paddingLeft: 10 }}></Icon></Left>
          <Body><Text>FORIS General</Text></Body>
          <Right><EntypoIcon name="back-in-time" style={{ paddingRight: 10, fontSize: 32 }}></EntypoIcon></Right>
        </Header>

        <Content>
          <View style={{ paddingTop: 10 }}>
            <View style={{ flexDirection: 'row' }}>

              <View style={{ flex: 1, alignItems: 'center' }}>
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

                  <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                    <Button bordered dark style={{ flex: 3, marginLeft: 10, justifyContent: 'center', height: 30 }}>
                      <Text>Edit Profile</Text>
                    </Button>

                    <Button bordered dark style={{ flex: 1, height: 30, marginRight: 10, marginLeft: 5, justifyContent: 'center' }}>
                      <Icon name="setting" />
                    </Button>
                  </View>

                </View>
              </View>
            </View>

            <View style={{ paddingBottom: 10, paddingHorizontal: 10 }}>
              <Text style={{ fontWeight: 'bold' }}>Yakumo Asano</Text>
              <Text> My school is Seattle Central College </Text>
              <Text> studyabroadsguide.com </Text>
            </View>
          </View>

          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderWidth: 1, borderTopColor: '#eae5e5',
                           borderBottomColor: '#eae5e5' }}>

              <Button transparent onPress={() => this.segmentClicked(0)} active={this.state.activeIndex === 0}>
                <Icon name="ios-apps-outline" style={[this.state.activeIndex === 0 ? {} : { color: 'gray' }]} />
              </Button>

              <Button transparent onPress={() => this.segmentClicked(1)} active={this.state.activeIndex === 1}>
                <Icon name="ios-apps-outline" style={[this.state.activeIndex === 1 ? {} : { color: 'gray' }]} />
              </Button>

              <Button transparent onPress={() => this.segmentClicked(2)} active={this.state.activeIndex === 2}>
                <Icon name="ios-apps-outline" style={[this.state.activeIndex === 2 ? {} : { color: 'gray' }]} />
              </Button>

              <Button transparent onPress={() => this.segmentClicked(3)} active={this.state.activeIndex === 3}>
                <Icon name="ios-apps-outline" style={[this.state.activeIndex === 3 ? {} : { color: 'gray' }]} />
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
