import React, { Component } from 'react';
import { TouchableElement, Text, View, AppRegistry, Image, Animated, TouchableOpacity, ImageBackground, StyleSheet, Button} from 'react-native';

const styles=StyleSheet.create({
  head1: {
    fontSize: 50,
    color: 'black',
    alignItems: 'center',
    top: 135,
  },
  head2: {
    fontSize: 16,
    color: 'black',
    alignItems: 'center',
    top: 155,
  },
});

export default class frontPage extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <ImageBackground source={{uri: 'https://facebook.github.io/react/logo-og.png'}} style={{width: '100%', height: '100%'}} imageStyle={{opacity: 0.3}}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.head1}>FORIS</Text>
          <Text style={styles.head2}>For International Students</Text>
        </View>
        <View style={{top: 420}}>
          <Button onPress={this._onPressButton} title="LOGIN" color='black'/>
          </View>
          <View style={{top: 450}}>
          <Button onPress={this._onPressButton} title="SIGN UP" color='black'/>
          </View>
          <View style={{top: 460}}>
             <Button onPress={() => this.props.navigation.navigate('./project1/111.js')} title="*Use of Terms" color='blue' />
          </View>
        </ImageBackground>
      </View>
    );
  }
}



//AppRegistry.registerComponent('project1', () => frontPage);
