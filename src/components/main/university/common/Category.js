import React from 'react';
import { withNavigation } from 'react-navigation';
import { Image, View, Text, TouchableHighlight } from 'react-native';

const Category = ({ imageUri, name, navigation, navigationStack }) => {
  const { containerStyle, imageStyle } = styles;

  return (
    <View>
      <TouchableHighlight
        onPress={() => navigationStack.navigate(navigation)}
        underlayColor='white'
      >
        <View style={containerStyle}>
          <View style={{ flex: 2 }}>
            <Image
              source={imageUri}
              style={imageStyle}
            />
          </View>
          <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
            <Text> {name} </Text>
          </View>
        </View>
      </TouchableHighlight>
      </View>
  );
};

const styles = {
  containerStyle: {
    height: 300,
    width: 130,
    marginLeft: 20,
    borderWidth: 0,
    borderColor: '#dddddd',
    backgroundColor: 'white',
  },
  imageStyle: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  }
};

export default withNavigation(Category);
