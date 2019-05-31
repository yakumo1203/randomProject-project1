import React, { Component } from 'react';
import { TouchableHighlight, Alert, ScrollView, ImageBackground, Image, Text, View, AppRegistry, StyleSheet, Button, TextInput } from 'react-native';
//import Slideshow from 'react-native-image-slider-show';

export default class Main extends Component{
  render(){
    return(
      <ScrollView>
        <View>
          <View>
            <Text style={styles.nameForis}>
              FORIS
            </Text>
          </View>

          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              top: 50,
            }}
          />
        </View>

        <View>
          <Image source={require('../project1/ImageForis1.jpg')} style={{top: 200, height: '100%', width: '100%'}}>
          </Image>
          <Text style={styles.inko}>
            FORISが出版されました。
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles=StyleSheet.create({
  nameForis: {
    marginLeft: 40,
    top: 40,
    fontSize: 40,
    fontFamily: 'Avenir',
    color: 'gray',
  },

  inko: {
    top: 200,
    marginLeft: 90,
    color: 'black',
    fontSize: 60,
  },
})
