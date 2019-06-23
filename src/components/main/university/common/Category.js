import React from 'react';
import { Image, View, Text, TouchableHighlight } from 'react-native';

const Category = ({ universityPage, imageUri, name, navigation }) => {
  const { containerStyle, imageStyle } = styles;

  return (
    <View>
      <TouchableHighlight
        onPress={() => this.props.navigation.navigate({ navigation })}
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
    height: 200,
    width: 130,
    marginLeft: 20,
    borderWidth: 0.5,
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

export { Category };
