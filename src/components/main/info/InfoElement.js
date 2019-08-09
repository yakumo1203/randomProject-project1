import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Text
} from 'react-native';
import { Card } from 'native-base';

const images = {

  "ERAU": require('../../../img/Embry-RiddleAeronauticalUniversity/FORIS_ERAUNews.jpg'),
  "SU": require('../../../img/SeattleUniversity/FORIS_SUNews.jpg'),
  "UW": require('../../../img/UniversityOfWashington/FORIS_UWNews.jpg'),
}

const links = {

  "SU": 'SUArticles',

}

class InfoElement extends Component {
  render() {
  return (
    <Card>
      <TouchableOpacity onPress={() => this.props.navigation(links[this.props.link])}>
      <View style={styles.cardView}>
        <ImageBackground
            source={images[this.props.universityImage]}
            style={styles.backgroundImageView}>
          <Text style={styles.universityInitial}> {this.props.universityInitial} </Text>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.viewers}>{this.props.viewers} views</Text>
        </ImageBackground>
      </View>
      </TouchableOpacity>
    </Card>
  )
 }
}

export default InfoElement;

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: 'white',
    height: 200,
  },

  backgroundImageView: {
    height: '100%',
    width: '100%',
  },

  universityInitial: {
    color: 'white',
    fontWeight: '700',
    paddingLeft: 15,
    paddingTop: 15,
    textShadowColor: 'black',
    textShadowOffset: { height: 3, width: 3 }
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
})
