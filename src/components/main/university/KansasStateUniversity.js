import React, { Component } from 'react';
import { TouchableHighlight, ScrollView, AppRegistry, View, SafeAreaView, Image, Text } from 'react-native';

class KansasStateUniversity extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView>
          <View style={{ backgroundColor: 'white', paddingTop: 20 }}>
            <View style={{ height: 200, width: '100%'}}>
              <Image source={require('../../../img/FORIS_Aviation.jpg')}
                    style={{ height: '100%', width: '100%' }} />
            </View>
            <View style={{ borderBottomWidth: 1, borderBottomColor: '#dddddd'}}>
              <Text style={{ marginLeft: 20, fontSize: 30, fontWeight: '100' }}>
                  Kansas State University
              </Text>
            </View>

            <View style={{ marginLeft: 40, marginRight: 40 }}>
              <Text style={{ marginTop: 20 }}>
                Kansas State University is a high ranked university in the fields
                of the Aviation. Kohei is attending to this school, who is a CEO
                of a company named FORIS.
              </Text>
            </View>

            <View style={{ width: '90%', marginLeft: 0, marginRight: 'auto' }}>
              <View style={{ flexDirection: 'row', marginTop: 40, marginButtom: 20,
                            height: 36, position: 'relative' }}>
                <View style={{ position: 'absolute', width: '20%', height: '100%', top: 0, left: 0, backgroundColor: '#00ccff' }}/>
                  <TouchableHighlight style={{ flex: 1, justifyContent: 'center',
                                              alignItems: 'center', borderWidth: 1,
                                              borderColor: '#dddddd', borderRightWidth: 0,
                                              borderTopRightWidth: 0, borderBottomRightRadius: 0 }}>
                    <Text> 応募　</Text>
                  </TouchableHighlight>

                  <TouchableHighlight style={{ flex: 1, justifyContent: 'center',
                                              alignItems: 'center', borderWidth: 1,
                                              borderColor: '#dddddd', borderRightWidth: 0,
                                              borderTopRightWidth: 0, borderBottomRightRadius: 0 }}>
                    <Text> 施設　</Text>
                  </TouchableHighlight>

                  <TouchableHighlight style={{ flex: 1, justifyContent: 'center',
                                              alignItems: 'center', borderWidth: 1,
                                              borderColor: '#dddddd', borderRightWidth: 0,
                                              borderTopRightWidth: 0, borderBottomRightRadius: 0 }}>
                    <Text> 専攻　</Text>
                  </TouchableHighlight>

                  <TouchableHighlight style={{ flex: 1, justifyContent: 'center',
                                              alignItems: 'center', borderWidth: 1,
                                              borderColor: '#dddddd', borderRightWidth: 0,
                                              borderTopRightWidth: 0, borderBottomRightRadius: 0 }}>
                    <Text> 準備　</Text>
                  </TouchableHighlight>

                  <TouchableHighlight style={{ flex: 1, justifyContent: 'center',
                                              alignItems: 'center', borderWidth: 1,
                                              borderColor: '#dddddd', borderRightWidth: 1,
                                              borderLeftWidth: 1,
                                              borderTopLeftWidth: 0, borderBottomLeftRadius: 0 }}>
                    <Text> ユーザー　</Text>
                  </TouchableHighlight>

            </View>
           </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default KansasStateUniversity;
