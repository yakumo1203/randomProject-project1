import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import Category from './Category.js';

class universityFront extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <View>
          <View style={{ height: 50, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
            <Text style={{ fontSize: 30,
                          color: 'gray',
                          fontWeight: 500,
                          marginLeft: 20 }}>
              FORIS
            </Text>
          </View>
        </View>

        <ScrollView scrollEventThrottle={16}>
          <View>
            <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
              <Text style={{ fontSize: 15, fontWeight: '500', paddingHorizontal: 20, color: 'gray' }}>
                最近見た大学
              </Text>

              <View style={{ height: 200, marginTop: 20 }}>
                <ScrollView horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                  <Category imageUri={require('../../../img/FORIS_Aviation.jpg')}
                            name="Kansus State University"/>
                  <Category imageUri={require('../../../img/FORIS_Aviation.jpg')}
                            name="Kansus State University"/>
                  <Category imageUri={require('../../../img/FORIS_Aviation.jpg')}
                            name="Kansus State University"/>
                  <Category imageUri={require('../../../img/FORIS_Aviation.jpg')}
                            name="Kansus State University"/>
                </ScrollView>
              </View>
            </View>

            <View style={{ flex: 1, backgroundColor: 'white', marginTop: 40 }}>
              <Text style={{ fontSize: 15, fontWeight: '500', paddingHorizontal: 20, color: 'gray' }}>
                あなたにオススメ
              </Text>
              <View style={{ height: 200, marginTop: 20 }}>
                <ScrollView horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                  <Category imageUri={require('../../../img/FORIS_Aviation.jpg')}
                            name="Kansus State University"/>
                  <Category imageUri={require('../../../img/FORIS_Aviation.jpg')}
                            name="Kansus State University"/>
                  <Category imageUri={require('../../../img/FORIS_Aviation.jpg')}
                            name="Kansus State University"/>
                  <Category imageUri={require('../../../img/FORIS_Aviation.jpg')}
                            name="Kansus State University"/>
                </ScrollView>
              </View>
            </View>

            <View style={{ flex: 1, backgroundColor: 'white', marginTop: 40 }}>
              <Text style={{ fontSize: 15, fontWeight: '500', paddingHorizontal: 20, color: 'gray' }}>
                人気の大学
              </Text>
              <View style={{ height: 200, marginTop: 20 }}>
                <ScrollView horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                  <Category imageUri={require('../../../img/FORIS_Aviation.jpg')}
                            name="Kansus State University"/>
                  <Category imageUri={require('../../../img/FORIS_Aviation.jpg')}
                            name="Kansus State University"/>
                  <Category imageUri={require('../../../img/FORIS_Aviation.jpg')}
                            name="Kansus State University"/>
                  <Category imageUri={require('../../../img/FORIS_Aviation.jpg')}
                            name="Kansus State University"/>
                </ScrollView>
              </View>
            </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default universityFront;
