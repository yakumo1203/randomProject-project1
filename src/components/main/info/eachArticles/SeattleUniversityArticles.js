import React, { Component } from 'react';
import { View, TouchableOpacity, ImageBackground, Text, StyleSheet } from 'react-native';
import { Card, Container, Content, CardItem, Header, Right, Left, Icon, ActionSheet, Button } from 'native-base';

var BUTTONS = ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

class SUArticles extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Icon name='arrow-round-back' style={styles.iconColor} onPress={() => this.props.navigation.goBack()} />
          </Left>
          <Right>
            <Icon name='more' style={styles.iconColor} onPress={() =>
            ActionSheet.show(
              {
                options: BUTTONS,
                cancelButtonIndex: CANCEL_INDEX,
                destructiveButtonIndex: DESTRUCTIVE_INDEX,
                title: "Testing ActionSheet"
              },
              buttonIndex => {
                this.setState({ clicked: BUTTONS[buttonIndex] });
              }
            )}/>
          </Right>
        </Header>

        <Content>
          <Card>
            <View style={styles.backgroundView}>
              <ImageBackground source={require('../../../../img/SeattleUniversity/FORIS_SUNews.jpg')}
                               style={styles.backgroundImageStyle}>
              <Text style={styles.universityInitial}> SU </Text>
              <Text style={styles.title}>Seattle Universityでの生活</Text>
              <Text style={styles.viewers}>1,149Views</Text>
              </ImageBackground>
            </View>
          </Card>

          <Card>
            <Text style={styles.introduction}>Published by Yakumo Asano</Text>
            <Text style={styles.introduction}>2019.7.2  15:17</Text>
          </Card>

          <CardItem>
            <Text>
              ygsdbiidc\
              kudbcowubwo
              dwiucbwoueb
              wdicbioube

              iowduwcoubob
              swciubioub
              woducheowuh
              wcobunce
              edcowuborubn
              ebcroubr
              ecopinhcpinrpin
              cdwoubrioprpih
              dwcoubornp
              ecoruwborubn
              eowurcounpir
              ecoubworubnophiqe
              weoucopiwhne
              coubounc
              oubcrwoubo
            </Text>
          </CardItem>

          <CardItem>
            <TouchableOpacity style={styles.nextButtonView}>
              <Text>次のページへ</Text>
            </TouchableOpacity>
          </CardItem>
        </Content>
      </Container>
    )
  }
}

export default SUArticles;

const styles = StyleSheet.create({
  iconColor: {
    color: 'gray',
  },

  backgroundView: {
    backgroundColor: 'white',
    height: 200,
  },

  backgroundImageStyle: {
    height: '100%',
    width: '100%'
  },

  universityInitial: {
    color: 'white',
    fontWeight: '700',
    paddingLeft: 15,
    paddingTop: 15,
    textShadowColor: 'black',
    textShadowOffset: { height: 3, width: 3 },
  },

  title: {
    marginTop: 120,
    fontSize: 22,
    color: 'white',
    fontWeight: '700',
    paddingLeft: 20,
    textShadowColor: 'black',
    textShadowOffset: { height: 3, width: 3 }
  },

  viewers: {
    color: 'white',
    fontWeight: '700',
    fontSize: 10,
    paddingLeft: 20,
    textShadowColor: 'black',
    textShadowOffset: { height: 3, width: 3 }
  },

  introduction: {
    color: 'gray',
    paddingLeft: 20
  },

  nextButtonView: {
    height: 30,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dddddd'
  },

})
