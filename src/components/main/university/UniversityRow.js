import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Category from './Category.js';

const UniversityRow = ({ text, imgUri }) => {
  const { containerStyle, textStyle } = styles;

  return (
    <View style={[containerStyle]}>
      <Text style={textStyle}>{text}</Text>
      <View style={{ height: 200, marginTop: 20 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <Category
            imageUri={imgUri}
            name="Kansas State University"
          />
          <Category
            imageUri={imgUri}
            name="Kansas State University"
          />
          <Category
            imageUri={imgUri}
            name="Kansas State University"
          />
          <Category
            imageUri={imgUri}
            name="Kansas State University"
          />
          <Category
            imageUri={imgUri}
            name="Kansas State University"
          />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20
  },
  textStyle: {
    fontSize: 15,
    fontWeight: '500',
    paddingHorizontal: 20,
    color: 'gray'
  },
};

export default UniversityRow;
