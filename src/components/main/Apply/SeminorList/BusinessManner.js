import React, { Component } from 'react';
import { View, Text, Image, SafeAreaView, ScrollView } from 'react-native';

class BusinessManner extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={{ flex: 1, height: '30%', width: '100%' }}>
              <Image source={require('../../../../img/FORIS_BusinessManner.jpg')} />
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default BusinessManner;
