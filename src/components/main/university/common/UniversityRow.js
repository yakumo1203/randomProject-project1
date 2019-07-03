import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Category from './Category';

class UniversityRow extends React.Component {
  constructor(props) {
    super(props);
    const universityRowStyle = props.universityRowStyle
  }

  render() {
    const { containerStyle, textStyle } = styles;

    return (
      <View style={[containerStyle, this.universityRowStyle]}>
        <Text style={textStyle}>あなたにオススメの大学</Text>
        <View style={{ height: 200, marginTop: 20 }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <Category
              imageUri={require('../../../../img/UniversityOfWashington/FORIS_UW2.jpg')}
              navigation='KansasStateUniversity'
              navigationStack={this.props.navigation}
            />

            <Category
              imageUri={require('../../../../img/ArizonaStateUniversity/FORIS_ASU.jpg')}
              navigation='KansasStateUniversity'
              navigationStack={this.props.navigation}
            />

            <Category
              imageUri={require('../../../../img/Embry-RiddleAeronauticalUniversity/FORIS_ERAU.jpg')}
              navigation='KansasStateUniversity'
              navigationStack={this.props.navigation}
            />
            <Category
              imageUri={require('../../../../img/SeattleUniversity/FORIS_SU.jpg')}
              navigation='KansasStateUniversity'
              navigationStack={this.props.navigation}
            />
            <Category
              imageUri={require('../../../../img/UCBerkeley/FORIS_UCBerkeley.png')}
              navigation='KansasStateUniversity'
              navigationStack={this.props.navigation}
            />
          </ScrollView>
        </View>
      </View>
  )};
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
