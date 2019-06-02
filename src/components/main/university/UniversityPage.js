import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import { UniversityRow } from './common';

class UniversityPage extends Component {
  render() {
    const { headerTextStyle, headerContainerStyle } = styles;

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={headerContainerStyle}>
          <Text style={headerTextStyle}> FORIS </Text>
        </View>

        <ScrollView scrollEventThrottle={16}>
          <View>
            <UniversityRow
              text='今ホットな大学'
              header='Kansas State University'
              imgUri={require('../../../img/FORIS_Aviation.jpg')}
            />

            <UniversityRow
              text='あなたにおすすめ'
              header='Kansas State University'
              imgUri={require('../../../img/FORIS_Aviation.jpg')}
              universityRowStyle={{ paddingTop: 0, marginTop: 40 }}
            />

            <UniversityRow
              text='あなたが見た大学'
              header='Kansas State University'
              imgUri={require('../../../img/FORIS_Aviation.jpg')}
              universityRowStyle={{ paddingTop: 0, marginTop: 40 }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = {
  headerContainerStyle: {
     height: 50,
     backgroundColor: 'white',
     borderBottomWidth: 1,
     borderBottomColor: '#dddddd'
  },
  headerTextStyle: {
    fontSize: 30,
    color: 'gray',
    fontWeight: 500,
    marginLeft: 20
  }
};

export default UniversityPage;
