import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Category } from '../common';

class UniversityRow extends React.Component {
  constructor(header, text, imgUri, universityRowStyle, universityPage) {
    super();
    this.header = header;
    this.text = text;
    this.imgUri = imgUri;
    this.universityRowStyle = universityRowStyle;
    this.universityPage = universityPage;
  }

  render() {
    const { header, text, imgUri, universityRowStyle, universityPage } = this;
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
              imageUri={imgUri}
              name={header}
              universityPage={universityPage}
            />
            <Category
              imageUri={imgUri}
              name={header}
            />
            <Category
              imageUri={imgUri}
              name={header}
            />
            <Category
              imageUri={imgUri}
              name={header}
            />
            <Category
              imageUri={imgUri}
              name={header}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

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
