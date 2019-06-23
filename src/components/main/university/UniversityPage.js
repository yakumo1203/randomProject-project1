import React, { Component } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { UniversityRow } from './common';

class UniversityPage extends Component {

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView scrollEventThrottle={16}>
          <View>
            <UniversityRow
              text='今ホットな大学'
              header='Kansas State University'
              imgUri={require('../../../img/FORIS_Aviation.jpg')}
              universityPage='KansasStateUniversity'
              navigation={this.props.navigation}
            />

            <UniversityRow
              text='あなたにおすすめ'
              header='Kansas State University'
              imgUri={require('../../../img/FORIS_Aviation.jpg')}
              universityPage='KansasStateUniversity'
              universityRowStyle={{ paddingTop: 0, marginTop: 40 }}
              navigation={this.props.navigation}
            />

            <UniversityRow
              text='あなたが見た大学'
              header='Kansas State University'
              imgUri={require('../../../img/FORIS_Aviation.jpg')}
              universityRowStyle={{ paddingTop: 0, marginTop: 40 }}
              navigation={this.props.navigation}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default UniversityPage;
