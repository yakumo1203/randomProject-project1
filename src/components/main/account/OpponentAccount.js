import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import { TouchableHighlight, Accordion, Icon, Container, Content, Header, Left, Right, Body, Button, Card, CardItem, Thumbnail } from 'native-base';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import CardComponent from '../home/CardComponent';

var { width, height } = Dimensions.get('window');

class Account extends Component {

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

  iconClicked = (index) => {
    this.setState({
      hideAndShowIndex: index,
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

  rednerIcon = () => {
    if (this.state.hideAndShowIndex === 1) {
      return (
        <View>
          <Text>as</Text>
        </View>
      )
    }
  }

  renderSection = () => {
    if (this.state.activeIndex === 0) {
      return (
        <View>
          <Card>

            <CardItem>
              <Image source={require('../../../img/FORIS_General2.jpg')}
                     style={{ height: 250, width: '100%' }}/>
            </CardItem>

            <CardItem>
              <Text style={{ color: 'gray' }}>100likes</Text>
            </CardItem>

            <CardItem>
              <Text style={{ color: 'gray' }}>
               wsddiwcygedou
               sdicwouhd
               isybwcdiuh
               wecowuhih
               wdgiuegfiouhu
               weougfoi
               e[fgeriguh]
              </Text>
            </CardItem>

            <CardItem>
              <Left>
                <Icon name='ios-heart' />
                <Text>    </Text>
                <Icon name='ios-send' />
              </Left>

              <Right>
                <Text style={{ color: 'gray' }}>Read more...</Text>
              </Right>
            </CardItem>
          </Card>

          <Card>

            <CardItem>
              <Image source={require('../../../img/FORIS_General2.jpg')}
                     style={{ height: 250, width: '100%' }}/>
            </CardItem>

            <CardItem>
              <Text style={{ color: 'gray' }}>
               wsddiwcygedou
               sdicwouhd
               isybwcdiuh
               wecowuhih
               wdgiuegfiouhu
               weougfoi
               e[fgeriguh]
              </Text>
            </CardItem>

            <CardItem>
              <Left>
                <Icon name='ios-heart' />
                <Text>    </Text>
                <Icon name='ios-send' />
              </Left>

              <Right>
                <Text style={{ color: 'gray' }}>Read more...</Text>
              </Right>
            </CardItem>
          </Card>

          <Card>


            <CardItem>
              <Image source={require('../../../img/FORIS_General2.jpg')}
                     style={{ height: 250, width: '100%' }}/>
            </CardItem>

            <CardItem>
              <Text style={{ color: 'gray' }}>
               wsddiwcygedou
               sdicwouhd
               isybwcdiuh
               wecowuhih
               wdgiuegfiouhu
               weougfoi
               e[fgeriguh]
              </Text>
            </CardItem>

            <CardItem>
              <Left>
                <Icon name='ios-heart' />
                <Text>    </Text>
                <Icon name='ios-send' />
              </Left>

              <Right>
                <Text style={{ color: 'gray' }}>Read more...</Text>
              </Right>
            </CardItem>
          </Card>


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

  else if (this.state.activeIndex === 2) {
    return (
        <View>
          <Card>

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
              <Image source={require('../../../img/FORIS_General2.jpg')}
                     style={{ height: 250, width: '100%' }}/>
            </CardItem>

            <CardItem>
              <Text style={{ color: 'gray' }}>100likes</Text>
            </CardItem>

            <CardItem>
              <Text style={{ color: 'gray' }}>
               wsddiwcygedou
               sdicwouhd
               isybwcdiuh
               wecowuhih
               wdgiuegfiouhu
               weougfoi
               e[fgeriguh]
              </Text>
            </CardItem>

            <CardItem>
              <Left>
                <Icon name='ios-heart' />
                <Text>    </Text>
                <Icon name='ios-send' />
              </Left>

              <Right>
                <Text style={{ color: 'gray' }}>Read more...</Text>
              </Right>
            </CardItem>
          </Card>

          <Card>

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
              <Image source={require('../../../img/FORIS_General2.jpg')}
                     style={{ height: 250, width: '100%' }}/>
            </CardItem>

            <CardItem>
              <Text style={{ color: 'gray' }}>
               wsddiwcygedou
               sdicwouhd
               isybwcdiuh
               wecowuhih
               wdgiuegfiouhu
               weougfoi
               e[fgeriguh]
              </Text>
            </CardItem>

            <CardItem>
              <Left>
                <Icon name='ios-heart' />
                <Text>    </Text>
                <Icon name='ios-send' />
              </Left>

              <Right>
                <Text style={{ color: 'gray' }}>Read more...</Text>
              </Right>
            </CardItem>
          </Card>

          <Card>

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
              <Image source={require('../../../img/FORIS_General2.jpg')}
                     style={{ height: 250, width: '100%' }}/>
            </CardItem>

            <CardItem>
              <Text style={{ color: 'gray' }}>
               wsddiwcygedou
               sdicwouhd
               isybwcdiuh
               wecowuhih
               wdgiuegfiouhu
               weougfoi
               e[fgeriguh]
              </Text>
            </CardItem>

            <CardItem>
              <Left>
                <Icon name='ios-heart' />
                <Text>    </Text>
                <Icon name='ios-send' />
              </Left>

              <Right>
                <Text style={{ color: 'gray' }}>Read more...</Text>
              </Right>
            </CardItem>
          </Card>


        </View>
      )
   }

   else if (this.state.activeIndex === 3) {
     return (
       <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../../../img/FORIS_Aviation.jpg')} />

                <Body>
                  <Text>ビジネスマナー講義（7月21日）参加</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../../../img/FORIS_Aviation.jpg')} />

                <Body>
                  <Text>ビジネスマナー講義（7月21日）参加</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../../../img/FORIS_Aviation.jpg')} />

                <Body>
                  <Text>ビジネスマナー講義（7月21日）参加</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
        </Content>
       </Container>
     )
   }
}

render() {
  return (
    <Container>
      <Content>

        <View>
          <Image source={require('../../../img/FORIS_General2.jpg')}
                 style={{ height: 150, width: '100%' }}/>
        </View>
        <View style={{ marginTop: -37.5, alignItems: 'center' }}>
          <Image source={require('../../../img/FORIS_Aviation.jpg')}
                 style={{ width: 75, height: 75, borderRadius: 37.5 }}/>
        </View>

        <View style={{ marginTop: -30, alignItems: 'flex-end', marginRight: 10 }}>
          <Icon name="ios-menu" style={{ paddingLeft: 10, fontSize: 25, color: 'gray' }}
                    onPress={() => this.props.navigation.toggleDrawer()}>
          </Icon>
        </View>

        <View style={{ marginTop: -26, alignItems: 'flex-end', paddingRight: 5, marginLeft: '73%' }}>
          <Button bordered dark style={{ width: 60, height: 24, marginRight: 10, borderColor: '#00ccff' }}
                  onPress={() => this.props.navigation.navigate('EditProfile')} >
            <Text style={{ color: '#00ccff', fontSize: 11, paddingLeft: 18 }}>Follow</Text>
          </Button>
        </View>

        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <Text style={{ fontWeigh: '100', fontSize: 25 }}>Kohei Sano</Text>
          <Text style={{ fontSize: 15, color: 'gray', marginTop: 10 }}>Kansas State University</Text>


          <Text>{'\n'}{'\n'}{'\n'}</Text>

        </View>

        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderWidth: 1, borderTopColor: 'black',
                         borderColor: '#eae5e5', borderBottomColor: '#eae5e5' }}>

            <Button transparent onPress={() => this.segmentClicked(0)} active={this.state.activeIndex === 0}>
              <Text style={[this.state.activeIndex === 0 ? { color: '#00ccff' } : { color: 'gray' }]}>Home</Text>
            </Button>

            <Button transparent onPress={() => this.segmentClicked(1)} active={this.state.activeIndex === 1}>
              <Text style={[this.state.activeIndex === 1 ? { color: '#00ccff' } : { color: 'gray' }]}>Answers</Text>
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

export default Account;
