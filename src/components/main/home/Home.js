import React, { Component } from 'react';
import { AppRegistry, Image, Text, SafeAreaView, ScrollView, View, TouchableHighlight } from 'react-native';

class homeFront extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#dddddd' }}>
        <ScrollView>
            <TouchableHighlight onPress={() => this.iuwfoub() }>
              <Image source={require('./src/img/FORIS_HomeGeneral.jpg')}
                     style={{ height: 200, width: '100%' }}/>
            </TouchableHighlight>

          <View style={{ flex: 1, flexDirection: 'column' }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ height: 200, width: '50%' }}>
                <TouchableHighlight onPress={() => this.iuwfoub() }>
                  <Image source={require('./src/img/FORIS_Aviation.jpg')}
                         style={{ height: 200, width: '50%' }}/>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => this.iuwfoub() }>
                  <Image source={require('./src/img/FORIS_HomeGeneral.jpg')}
                         style={{ height: 200, width: '50%' }}/>
                </TouchableHighlight>
              </View>
            </View>

            <View>
              <TouchableHighlight onPress={() => this.iuwfoub() }>
                <Image source={require('./src/img/FORIS_HomeGeneral.jpg')}
                       style={{ height: 200, width: '50%' }}/>
              </TouchableHighlight>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default homeFront;
