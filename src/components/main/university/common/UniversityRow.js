import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Category } from '../common';

const UniversityRow = ({ header, text, imgUri1, imgUri2, imgUri3, imgUri4, imgUri5, universityRowStyle, universityPage, navigation }) => {
  const { containerStyle, textStyle } = styles;

  return (
    <View style={[containerStyle, universityRowStyle]}>
      <Text style={textStyle}>{text}</Text>
      <View style={{ height: 200, marginTop: 20 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <Category
            imageUri={imgUri1}
            name={header}
            navigation={navigation}
            universityPage={universityPage}
          />
          <Category
            imageUri={imgUri2}
            name={header}
            navigation={navigation}
            universityPage={universityPage}
          />
          <Category
            imageUri={imgUri3}
            name={header}
            navigation={navigation}
            universityPage={universityPage}
          />
          <Category
            imageUri={imgUri4}
            name={header}
            navigation={navigation}
            universityPage={universityPage}
          />
          <Category
            imageUri={imgUri5}
            name={header}
            navigation={navigation}
            universityPage={universityPage}
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

export { UniversityRow };
