import React from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native'

const GoBack = ({ onPress, goBackStyle }) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      style={[styles.buttonStyle, goBackStyle]}
    >
      <View>
        <Image source={require('../../../img/chevron-left.png')} />
        <Text>Back</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    flexDirection: 'row',
    flex: 1,
    top: 30,
    left: 30,
  }
});

export { GoBack };
