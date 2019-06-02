import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';

class Category extends Component {
  render() {
    const { containerStyle, imageStyle } = styles;

    return (
      <View style={containerStyle}>
        <View style={{ flex: 2 }}>
          <Image
            source={this.props.imageUri}
            style={imageStyle}
          />
        </View>
        <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
          <Text> {this.props.name} </Text>
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    height: 200,
    width: 130,
    marginLeft: 20,
    borderWidth: 0.5,
    borderColor: '#dddddd'
  },
  imageStyle: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  }
};

export default Category;
