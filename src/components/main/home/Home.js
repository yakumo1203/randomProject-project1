import React, { Component } from 'react';
import { View, AppRegistry, StyleSheet, Image, TouchableHighlight } from 'react-native';

export default class homeImage extends Component {
  render() {
    return (
      <View>
        <TouchableHighlight onPress={this._onPressButton}>
          <Image
            style={styles.button}
            title='General'
            source={require('../../../img/FORIS_HomeGeneral.jpg')}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: '62%',
  },
});
