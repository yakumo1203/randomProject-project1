import React, { Component } from 'react';
import { TouchableOpacity, Actions, Modal, AppRegistry, Image, Text, Dimensions, SafeAreaView, ScrollView, View, TouchableHighlight } from 'react-native';
import { Fab, Header, Right, CardItem, Left, Thumbnail, Body, Button, Icon, Card, Content, Container } from 'native-base';
import { DrawerNavigator } from 'react-navigation';
import HomePost from '../home/HomePost.js';

var { width, height } = Dimensions.get('window');

class homeFront extends Component {

  constructor(props) {
    super(props)

    this.state = {
      activeIndex: 0,
    }
  }

  segmentClicked = (index) => {
    this.setState({
      activeIndex: index,
    })
  }

  renderSection = () => {
    if (this.state.activeIndex === 0) {
      return (
        <View>
        <View>
        <View style={{ position: 'relative' }}>
          <HomePost
            name="Yakumo Asano"
            university="Seattle Central College"
            major="Conputer Science"
            location="Seattle, WA"
            imageSource="1"
            likes="101"
            content="souhousdou"
          />
          <HomePost
            name="Yakumo Asano"
            university="Seattle Central College"
            major="Conputer Science"
            location="Seattle, WA"
            imageSource="2"
            likes="201"
            content="souhousdou"
          />
          <HomePost
            name="Yakumo Asano"
            university="Seattle Central College"
            major="Conputer Science"
            location="Seattle, WA"
            imageSource="3"
            likes="301"
            content="souhousdou"
          />

        </View>
        </View>

        </View>
      )
    }
    else if (this.state.activeIndex === 1) {
      return (
        <View>
          <Card>
            <View style={{ flexDirection: 'column' }}>

              <CardItem>
                <Text style={{ color: 'gray' }}>航空関係</Text>
              </CardItem>

              <CardItem>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                  グリーンカードを取得する方法は？
                </Text>
              </CardItem>

              <CardItem>
                <Left>
                  <Thumbnail source={require('../../../img/FORIS_HomeGeneral.jpg')} />
                  <Body>
                    <Text>Yakumo Asano</Text>
                    <Text note style={{ color: 'gray', fontSize: 10 }}> Seattle Central College / Computer Science </Text>
                    <Text note style={{ color: 'gray', fontSize: 10 }}>
                      <Icon name='ios-pin' style={{ fontSize: 10, color: 'gray' }} /> Seattle, WA</Text>
                  </Body>
                </Left>
              </CardItem>

              <CardItem>
                <Text>
                  sdibvsciwbovbuobvobwoubeo
                  fwboubwoubcowbcuo
                  iyscibwdcibwibuciouqdob
                </Text>
              </CardItem>

              <CardItem>
                <Left>
                  <Text style={{ color: 'gray' }}>Yesterday</Text>
                </Left>

                <Right>
                  <Text style={{ color: 'gray' }}>Read more...</Text>
                </Right>
              </CardItem>

            </View>
          </Card>

          <Card>
            <View style={{ flexDirection: 'column' }}>

              <CardItem>
                <Text style={{ color: 'gray' }}>航空関係</Text>
              </CardItem>

              <CardItem>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                  グリーンカードを取得する方法は？
                </Text>
              </CardItem>

              <CardItem>
                <Left>
                  <Thumbnail source={require('../../../img/FORIS_HomeGeneral.jpg')} />
                  <Body>
                    <Text>Yakumo Asano</Text>
                    <Text note style={{ color: 'gray', fontSize: 10 }}> Seattle Central College / Computer Science </Text>
                    <Text note style={{ color: 'gray', fontSize: 10 }}>
                      <Icon name='ios-pin' style={{ fontSize: 10, color: 'gray' }} /> Seattle, WA</Text>
                  </Body>
                </Left>
              </CardItem>

              <CardItem>
                <Text>
                  sdibvsciwbovbuobvobwoubeo
                  fwboubwoubcowbcuo
                  iyscibwdcibwibuciouqdob
                </Text>
              </CardItem>

              <CardItem>
                <Left>
                  <Text style={{ color: 'gray' }}>Yesterday</Text>
                </Left>

                <Right>
                  <Text style={{ color: 'gray' }}>Read more...</Text>
                </Right>
              </CardItem>

            </View>
          </Card>

          <Card>
            <View style={{ flexDirection: 'column' }}>

              <CardItem>
                <Text style={{ color: 'gray' }}>航空関係</Text>
              </CardItem>

              <CardItem>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                  グリーンカードを取得する方法は？
                </Text>
              </CardItem>

              <CardItem>
                <Left>
                  <Thumbnail source={require('../../../img/FORIS_HomeGeneral.jpg')} />
                  <Body>
                    <Text>Yakumo Asano</Text>
                    <Text note style={{ color: 'gray', fontSize: 10 }}> Seattle Central College / Computer Science </Text>
                    <Text note style={{ color: 'gray', fontSize: 10 }}>
                      <Icon name='ios-pin' style={{ fontSize: 10, color: 'gray' }} /> Seattle, WA</Text>
                  </Body>
                </Left>
              </CardItem>

              <CardItem>
                <Text>
                  sdibvsciwbovbuobvobwoubeo
                  fwboubwoubcowbcuo
                  iyscibwdcibwibuciouqdob
                </Text>
              </CardItem>

              <CardItem>
                <Left>
                  <Text style={{ color: 'gray' }}>Yesterday</Text>
                </Left>

                <Right>
                  <Text style={{ color: 'gray' }}>Read more...</Text>
                </Right>
              </CardItem>

            </View>
          </Card>
        </View>
      )
    }
  }

  renderSectionPostButton = () => {
    if (this.state.activeIndex === 0) {
      return (
        <TouchableOpacity
          style={{ height: 50, width: 50, position: 'absolute', bottom: 10, right: 10, backgroundColor: '#00ccff', borderRadius: 30, alignItems: 'center', justifyContent: 'center' }}
          onPress={() => this.props.navigation.navigate('CreateNewPost')}
        >
          <Text style={{ color: 'white', fontSize: 25 }}> + </Text>
        </TouchableOpacity>
      )
    }

    else if (this.state.activeIndex === 1) {
      return (
        <TouchableOpacity
          style={{ height: 50, width: 50, position: 'absolute', bottom: 10, right: 10, backgroundColor: '#00ccff', borderRadius: 30, alignItems: 'center', justifyContent: 'center' }}
          onPress={() => this.props.navigation.navigate('CreateNewQuestion')}
        >
          <Text style={{ color: 'white', fontSize: 20 }}> ? </Text>
        </TouchableOpacity>
      )
    }
  }

  render() {
		return (
      <Container>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderWidth: 1, borderTopColor: '#eae5e5',
                       borderColor: '#eae5e5', borderBottomColor: '#eae5e5', marginTop: 50 }}>

          <View>
            <Image source={require('../../../img/FORISLOGO1.jpg')} style={{ height: 45, width: 45 }}/>
          </View>


          <Button transparent onPress={() => this.segmentClicked(0)} active={this.state.activeIndex === 0}>
            <Text style={[this.state.activeIndex === 0 ? { color: '#00ccff' } : { color: 'gray' }]}>Home</Text>
          </Button>

          <Button transparent onPress={() => this.segmentClicked(1)} active={this.state.activeIndex === 1}>
            <Text style={[this.state.activeIndex === 1 ? { color: '#00ccff' } : { color: 'gray' }]}>Questions</Text>
          </Button>

          <Button transparent onPress={() => this.segmentClicked(2)} active={this.state.activeIndex === 2}>
            <Text style={[this.state.activeIndex === 2 ? { color: '#00ccff' } : { color: 'gray' }]}>Notify</Text>
          </Button>

          <Button style={{ backgroundColor: 'white' }}>
            <Icon name='mail' size={10} style={{ color: 'gray', backgroundColor: 'white'}} />
          </Button>

        </View>

        <Content>
        {this.renderSection()}
        </Content>

        {this.renderSectionPostButton()}


      </Container>
		);
	}
}

export default homeFront;
