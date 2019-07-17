import React, { Component } from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

import { Icon,
         Container,
         Content,
         Left,
         Right,
         Body,
         Button,
         Card,
         CardItem,
         Thumbnail
       } from 'native-base';

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
                 style={styles.backgroundImage}/>
        </View>
        <View style={styles.topImageView}>
          <Image source={require('../../../img/FORIS_Aviation.jpg')}
                 style={styles.topImage}/>
        </View>

        <View style={styles.menuIconView}>
          <Icon name="ios-menu"
                style={styles.menuIcon}
                onPress={() => this.props.navigation.toggleDrawer()}>
          </Icon>
        </View>

        <View style={styles.editButtonView}>
          <Button bordered dark style={styles.editButton}
                  onPress={() => this.props.navigation.navigate('EditProfile')} >
            <Text style={styles.editButtonText}>Edit</Text>
          </Button>
        </View>

        <View style={styles.textView}>
          <Text style={styles.nameText}>Kohei Sano</Text>
          <Text style={styles.universityNameText}>Kansas State University</Text>
          <View style={styles.introducingView}>
            <Swiper style={styles.wrapper} showsButtons={true} autoplay={true} activeDotColor='#00ccff' >
              <View style={styles.slide1}>
                <Text style={styles.text}>専攻: Aviation</Text>
              </View>
              <View style={styles.slide2}>
                <Text style={styles.text}>誕生日: 1998/12/03</Text>
              </View>
              <View style={styles.slide3}>
                <Text style={styles.text}>趣味: Playing something</Text>
              </View>
            </Swiper>
          </View>

          <Text>{'\n'}{'\n'}</Text>

        </View>

        <View>
          <View style={styles.buttonView}>

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

const styles = StyleSheet.create({
  wrapper: {},

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },

  text: {
    color: 'gray',
    fontSize: 15,
    fontWeight: '300'
  },

  topImageView: {
    marginTop: -37.5,
    alignItems: 'center'
  },

  topImage: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
  },

  backgroundImage: {
    height: 150,
    width: '100%'
  },

  editButtonView: {
    marginTop: -26,
    alignItems: 'flex-end',
    paddingRight: 5,
    marginLeft: '73%',
  },

  editButton: {
    width: 60,
    height: 24,
    marginRight: 10,
    borderColor: '#00ccff',
  },

  editButtonText: {
    color: '#00ccff',
    fontSize: 11,
    paddingLeft: 18,
  },

  textView: {
    alignItems: 'center',
    marginTop: 20
  },

  nameText: {
    fontWeight: '300',
    fontSize: 25
  },

  universityNameText: {
    fontSize: 15,
    color: 'gray',
    marginTop: 10
  },

  introducingView: {
    height: 40,
    width: '100%',
    paddingTop: 20,
    marginTop: 30
  },

  menuIconView: {
    marginTop: -30,
    alignItems: 'flex-end',
    marginRight: 10,
  },

  menuIcon: {
    paddingLeft: 10,
    fontSize: 25,
    color: 'gray',
  },

  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderTopColor: 'black',
    borderColor: '#eae5e5',
    borderBottomColor: '#eae5e5'
  },
})

export default Account;
