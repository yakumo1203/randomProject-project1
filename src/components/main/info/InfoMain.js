import React, { Component } from 'react';
import { TouchableHighlight, FlatList, View, Text, Dimensions, ScrollView, Image, ImageBackground } from 'react-native';
import { Button, Card, CardItem, Left, Body, Right, Thumbnail, Icon, Container, Content } from 'native-base';
import { Header, SearchBar } from 'react-native-elements';
import { getNews } from './News.js';
import Article from './Article.js';
import SearchBarElement from './SearchBarElement';

var { width, height } = Dimensions.get('window');

class InfoMain extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], refreshing: true, activeIndex: 0 };
    this.fetchNews = this.fetchNews.bind(this);
  }

  componentDidMount() {
    this.fetchNews();
   }

   segmentClicked = (index) => {
     this.setState({
       activeIndex: index,
     })
   }

  fetchNews() {
    getNews()
      .then(articles => this.setState({ articles, refreshing: false }))
      .catch(() => this.setState({ refreshing: false }));
  }

  handleRefresh() {
    this.setState(
      {
        refreshing: true
    },
      () => this.fetchNews()
    );
  }

  renderSection = () => {
    if (this.state.activeIndex === 0) {
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
    else if (this.state.activeIndex === 1) {
      return (
        <View>
          <Card>
            <View style={{ backgroundColor: 'white', height: 200 }}>
              <ImageBackground source={require('../../../img/Embry-RiddleAeronauticalUniversity/FORIS_ERAUNews.jpg')}
                               style={{ height: '100%', width: '100%' }}>
              <Text style={{ color: 'white', fontWeight: '700', paddingLeft: 15, paddingTop: 15, textShadowColor: 'black', textShadowOffset: { height: 3, width: 3 } }}> ERAU </Text>
              <Text style={{ marginTop: 120, fontSize: 22, color: 'white', fontWeight: '700', paddingLeft: 20, textShadowColor: 'black', textShadowOffset: { height: 3, width: 3 } }}>ERAUがフライトコンテストで優勝</Text>
              <Text style={{ color: 'white', fontWeight: '700', fontSize: 10, paddingLeft: 20, textShadowColor: 'black', textShadowOffset: { height: 3, width: 3 } }}>1,149Views</Text>
              </ImageBackground>
            </View>
          </Card>

          <Card>
            <View style={{ backgroundColor: 'white', height: 200 }}>
              <ImageBackground source={require('../../../img/SeattleUniversity/FORIS_SUNews.jpg')}
                               style={{ height: '100%', width: '100%' }}>
              <Text style={{ color: 'white', fontWeight: '700', paddingLeft: 15, paddingTop: 15, textShadowColor: 'black', textShadowOffset: { height: 3, width: 3 } }}> SU </Text>
              <Text style={{ marginTop: 120, fontSize: 22, color: 'white', fontWeight: '700', paddingLeft: 20, textShadowColor: 'black', textShadowOffset: { height: 3, width: 3 } }}>Seattle Universityでの生活</Text>
              <Text style={{ color: 'white', fontWeight: '700', fontSize: 10, paddingLeft: 20, textShadowColor: 'black', textShadowOffset: { height: 3, width: 3 } }}>1,149Views</Text>
              </ImageBackground>
            </View>
          </Card>

          <Card>
            <View style={{ backgroundColor: 'white', height: 200 }}>
              <ImageBackground source={require('../../../img/UniversityOfWashington/FORIS_UWNews.jpg')}
                               style={{ height: '100%', width: '100%' }}>
              <Text style={{ color: 'white', fontWeight: '700', paddingLeft: 15, paddingTop: 15, textShadowColor: 'black', textShadowOffset: { height: 3, width: 3 } }}> UW </Text>
              <Text style={{ marginTop: 120, fontSize: 22, color: 'white', fontWeight: '700', paddingLeft: 20, textShadowColor: 'black', textShadowOffset: { height: 3, width: 3 } }}>UWへの転学の仕方</Text>
              <Text style={{ color: 'white', fontWeight: '700', fontSize: 10, paddingLeft: 20, textShadowColor: 'black', textShadowOffset: { height: 3, width: 3 } }}>1,149Views</Text>
              </ImageBackground>
            </View>
          </Card>
        </View>

      )
    }
    else if (this.state.activeIndex === 2) {
      return (
        <View>
          <Card>
            <View style={{ backgroundColor: 'white', height: 200 }}>
              <ImageBackground source={require('../../../img/Embry-RiddleAeronauticalUniversity/FORIS_ERAU.jpg')}
                               style={{ height: '100%', width: '100%' }}>
              <Text style={{ color: 'white', textShadowColor: 'black', textShadowOffset: { height: 3, width: 3 } }}> ERAU </Text>
              <Text style={{ marginTop: 150, fontSize: 15, color: 'white', fontWeight: '700', paddingLeft: 20, textShadowColor: 'black', textShadowOffset: { height: 3, width: 3 } }}>ERAUがフライトコンテストで優勝</Text>
              <Text style={{ color: 'white', fontSize: 10, paddingLeft: 20, textShadowColor: 'black', textShadowOffset: { height: 3, width: 3 } }}>1,149Views</Text>
              </ImageBackground>
            </View>
          </Card>

          <Card>
            <View style={{ backgroundColor: 'white', height: 200 }}>
              <ImageBackground source={require('../../../img/SeattleUniversity/FORIS_SU.jpg')}
                               style={{ height: '100%', width: '100%' }}>
              <Text style={{ color: 'white', textShadowColor: 'black', textShadowOffset: { height: 3, width: 3 } }}> SU </Text>
              <Text style={{ marginTop: 150, fontSize: 15, color: 'white', fontWeight: '700', paddingLeft: 20, textShadowColor: 'black', textShadowOffset: { height: 3, width: 3 } }}>Seattle Universityでの生活</Text>
              <Text style={{ color: 'white', fontSize: 10, paddingLeft: 20, textShadowColor: 'black', textShadowOffset: { height: 3, width: 3 } }}>1,149Views</Text>
              </ImageBackground>
            </View>
          </Card>

          <Card>
            <View style={{ backgroundColor: 'white', height: 200 }}>
              <ImageBackground source={require('../../../img/UniversityOfWashington/FORIS_UW.jpg')}
                               style={{ height: '100%', width: '100%' }}>
              <Text style={{ color: 'white', textShadowColor: 'black', textShadowOffset: { height: 3, width: 3 } }}> UW </Text>
              <Text style={{ marginTop: 150, fontSize: 15, color: 'white', fontWeight: '700', paddingLeft: 20, textShadowColor: 'black', textShadowOffset: { height: 3, width: 3 } }}>UWへの転学の仕方</Text>
              <Text style={{ color: 'white', fontSize: 10, paddingLeft: 20, textShadowColor: 'black', textShadowOffset: { height: 3, width: 3 } }}>1,149Views</Text>
              </ImageBackground>
            </View>
          </Card>
        </View>
      )
    }
    else if (this.state.activeIndex === 3) {
      return (
        <View>
          <Card>
            <View style={{ backgroundColor: 'white', height: 200 }}>
              <ImageBackground source={require('../../../img/Embry-RiddleAeronauticalUniversity/FORIS_ERAUNews.jpg')}
                               style={{ height: '100%', width: '100%' }}>
              <Text style={{ color: 'white', textShadowColor: 'black', textShadowOffset: { height: 3, width: 3 } }}> ERAU </Text>
              <Text style={{ marginTop: 150, fontSize: 15, color: 'white', fontWeight: '700', paddingLeft: 20, textShadowColor: 'black', textShadowOffset: { height: 3, width: 3 } }}>ERAUがフライトコンテストで優勝</Text>
              <Text style={{ color: 'white', fontSize: 10, paddingLeft: 20, textShadowColor: 'black', textShadowOffset: { height: 3, width: 3 } }}>1,149Views</Text>
              </ImageBackground>
            </View>
          </Card>

          <Card>
            <View style={{ backgroundColor: 'white', height: 200 }}>
              <ImageBackground source={require('../../../img/SeattleUniversity/FORIS_SUNews.jpg')}
                               style={{ height: '100%', width: '100%' }}>
              <Text style={{ color: 'white', textShadowColor: 'black', textShadowOffset: { height: 3, width: 3 } }}> SU </Text>
              <Text style={{ marginTop: 150, fontSize: 15, color: 'white', fontWeight: '700', paddingLeft: 20, textShadowColor: 'black', textShadowOffset: { height: 3, width: 3 } }}>Seattle Universityでの生活</Text>
              <Text style={{ color: 'white', fontSize: 10, paddingLeft: 20, textShadowColor: 'black', textShadowOffset: { height: 3, width: 3 } }}>1,149Views</Text>
              </ImageBackground>
            </View>
          </Card>

          <Card>
            <View style={{ backgroundColor: 'white', height: 200 }}>
              <ImageBackground source={require('../../../img/UniversityOfWashington/FORIS_UWNews.jpg')}
                               style={{ height: '100%', width: '100%' }}>
              <Text style={{ color: 'white', textShadowColor: 'black', textShadowOffset: { height: 3, width: 3 } }}> UW </Text>
              <Text style={{ marginTop: 150, fontSize: 15, color: 'white', fontWeight: '700', paddingLeft: 20, textShadowColor: 'black', textShadowOffset: { height: 3, width: 3 } }}>UWへの転学の仕方</Text>
              <Text style={{ color: 'white', fontSize: 10, paddingLeft: 20, textShadowColor: 'black', textShadowOffset: { height: 3, width: 3 } }}>1,149Views</Text>
              </ImageBackground>
            </View>
          </Card>
        </View>
      )
    }
  }

  render() {
    return (

      <Container>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderTopColor: 'gray',
                       backgroundColor: 'white', marginTop: 17 }}>

          <TouchableHighlight transparent onPress={() => this.segmentClicked(0)} active={this.state.activeIndex === 0} underlayColor='white'
                  style={[this.state.activeIndex === 0 ? {
                         borderBottomColor: '#00ccff',
                         borderBottomWidth: 1.7,
                         justifyContent: 'center',
                         alignItems: 'center' } : {
                         borderBottomColor: 'white',
                         borderBottomWidth: 1.7,
                         justifyContent: 'center',
                         alignItems: 'center' }]}>
            <Text style={[this.state.activeIndex === 0 ? { color: '#00ccff', borderBottomColor: '#00ccff', borderBottomWidth: 1, paddingBottom: 5 } : { color: 'gray', paddingBottom: 5 }]}> トップ </Text>
          </TouchableHighlight>

          <TouchableHighlight transparent onPress={() => this.segmentClicked(1)} active={this.state.activeIndex === 1} underlayColor='white'
                  style={[this.state.activeIndex === 1 ? {
                         borderBottomColor: '#00ccff',
                         borderBottomWidth: 1.5,
                         justifyContent: 'center',
                         alignItems: 'center' } : {
                         borderBottomColor: 'white',
                         borderBottomWidth: 1.5,
                         justifyContent: 'center',
                         alignItems: 'center' }]}>
            <Text style={[this.state.activeIndex === 1 ? { color: '#00ccff', borderBottomColor: '#00ccff', borderBottomWidth: 1, paddingBottom: 5 } : { color: 'gray', paddingBottom: 5 }]}>   一般   </Text>
          </TouchableHighlight>

          <TouchableHighlight transparent onPress={() => this.segmentClicked(2)} active={this.state.activeIndex === 2} underlayColor='white'
                  style={[this.state.activeIndex === 2 ? {
                         borderBottomColor: '#00ccff',
                         borderBottomWidth: 1.5,
                         justifyContent: 'center',
                         alignItems: 'center' } : {
                         borderBottomColor: 'white',
                         borderBottomWidth: 1.5,
                         justifyContent: 'center',
                         alignItems: 'center' }]}>
            <Text style={[this.state.activeIndex === 2 ? { color: '#00ccff', borderBottomColor: '#00ccff', borderBottomWidth: 1, paddingBottom: 5 } : { color: 'gray', paddingBottom: 5 }]}>   渡米   </Text>
          </TouchableHighlight>

          <TouchableHighlight transparent onPress={() => this.segmentClicked(3)} active={this.state.activeIndex === 3} underlayColor='white'
                  style={[this.state.activeIndex === 3 ? {
                         borderBottomColor: '#00ccff',
                         borderBottomWidth: 1.7,
                         justifyContent: 'center',
                         alignItems: 'center' } : {
                         borderBottomColor: 'white',
                         borderBottomWidth: 1.7,
                         justifyContent: 'center',
                         alignItems: 'center' }]}>
            <Text style={[this.state.activeIndex === 3 ? { color: '#00ccff', borderBottomColor: '#00ccff', borderBottomWidth: 1, paddingBottom: 5 } : { color: 'gray', paddingBottom: 5 }]}>   生活   </Text>
          </TouchableHighlight>

          <TouchableHighlight transparent onPress={() => this.segmentClicked(4)} active={this.state.activeIndex === 4} underlayColor='white'
                  style={[this.state.activeIndex === 4 ? {
                         borderBottomColor: '#00ccff',
                         borderBottomWidth: 1.7,
                         justifyContent: 'center',
                         alignItems: 'center' } : {
                         borderBottomColor: 'white',
                         borderBottomWidth: 1.7,
                         justifyContent: 'center',
                         alignItems: 'center' }]}>
            <Text style={[this.state.activeIndex === 4 ? { color: '#00ccff', borderBottomColor: '#00ccff', borderBottomWidth: 1, paddingBottom: 5 } : { color: 'gray', paddingBottom: 5 }]}>   転学   </Text>
          </TouchableHighlight>

          <TouchableHighlight transparent onPress={() => this.segmentClicked(5)} active={this.state.activeIndex === 5} underlayColor='white'
                  style={[this.state.activeIndex === 5 ? {
                         borderBottomColor: '#00ccff',
                         borderBottomWidth: 1.7,
                         justifyContent: 'center',
                         alignItems: 'center' } : {
                         borderBottomColor: 'white',
                         borderBottomWidth: 1.7,
                         justifyContent: 'center',
                         alignItems: 'center' }]}>
            <Text style={[this.state.activeIndex === 5 ? { color: '#00ccff', borderBottomColor: '#00ccff', borderBottomWidth: 1, paddingBottom: 5 } : { color: 'gray', paddingBottom: 5 }]}>   就職   </Text>
          </TouchableHighlight>

        </View>

        <Content>
        {this.renderSection()}
        </Content>

      </Container>

    );
  }
}

export default InfoMain;
