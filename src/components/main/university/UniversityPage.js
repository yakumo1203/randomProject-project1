import React, { Component } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { UniversityRow } from './common';

class UniversityPage extends Component {

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView scrollEventThrottle={16}>
          <View>
            <UniversityRow />

            <UniversityRow
              text='あなたにおすすめ'
              header='Kansas State University'
              imgUri1={require('../../../img/KansasStateUniversity/FORIS_KSU.jpg')}
              imgUri2={require('../../../img/StateUniversityNewYork/FORIS_SUNY.jpg')}
              imgUri3={require('../../../img/ArkansasStateUniversity/FORIS_ArkansasSU.jpg')}
              imgUri4={require('../../../img/UCLosAngeles/FORIS_UCLA.jpg')}
              imgUri5={require('../../../img/KansasStateUniversity/FORIS_KSU.jpg')}
              universityPage='KansasStateUniversity'
              universityRowStyle={{ paddingTop: 0, marginTop: 40 }}
              navigation='KansasStateUniversity'
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
