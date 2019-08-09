import React, { Component } from 'react';
import { TouchableHighlight,
         View,
         Text,
         Dimensions,
         Image,
         ImageBackground,
         TouchableOpacity
        } from 'react-native';
import { Button,
         Card,
         CardItem,
         Left,
         Body,
         Right,
         Thumbnail,
         Icon,
         Container,
         Content,
         Header,
         Item,
         Input
        } from 'native-base';
import HomePost from '../home/HomePost';
import InfoElement from '../info/InfoElement';

var { width, height } = Dimensions.get('window');

class InfoMain extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], refreshing: true, activeIndex: 0 };
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
          <InfoElement
            universityImage="ERAU"
            universityInitial="ERAU"
            title="ERAUがフライトコンテストで優勝"
            viewers="1,141"
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

          <HomePost
            name="Yakumo Asano"
            university="Seattle Central College"
            major="Conputer Science"
            location="Seattle, WA"
            imageSource="2"
            likes="10"
            content="souhousdou"
          />

        </View>
      )
    }
    else if (this.state.activeIndex === 1) {
      return (
        <View>
          <InfoElement
            universityImage="ERAU"
            universityInitial="ERAU"
            title="ERAUがフライトコンテストで優勝"
            viewers="1,141"
          />

          <InfoElement
            universityImage="SU"
            link="SU"
            universityInitial="SU"
            title="Seattle University life"
            viewers="1,141"
          />

          <InfoElement
            universityImage="UW"
            universityInitial="UW"
            title="Transfer to UW"
            viewers="1,141"
          />
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
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text style={{ color: '#00ccff' }}>Search</Text>
          </Button>
        </Header>

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
