import React, { Component } from 'react';
import { TouchableHighlight, ScrollView, View, SafeAreaView, Image, Text } from 'react-native';

class UniversityDetails extends Component {
  render() {
    const {
      barElementStyle,
      barContainerStyle,
      headerContainerStyle,
      headerTextStyle,
      safeAreaStyle,
      imageStyle
    } = styles;

    return (
      <SafeAreaView style={safeAreaStyle}>
        <ScrollView>
          <View style={{ backgroundColor: 'white', paddingTop: 20 }}>
            <View style={{ height: 200, width: '100%'}}>
              <Image
                source={}
                style={imageStyle}
              />
            </View>
            <View style={headerContainerStyle}>
              <Text style={headerTextStyle}>
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
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 40,
                  marginButtom: 20,
                  height: 36,
                  position: 'relative' }}
              >
                <View style={barContainerStyle}>
                  <TouchableHighlight style={barElementStyle}>
                    <Text> 応募　</Text>
                  </TouchableHighlight>
                  <TouchableHighlight style={barElementStyle}>
                    <Text> 施設　</Text>
                  </TouchableHighlight>
              </View>
            </View>
           </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = {
  safeAreaStyle: {
    flex: 1,
    backgroundColor: 'white'
  },
  containerStyle: {

  },
  textStyle: {

  },
  imageStyle: {
    height: '100%',
    width: '100%'
  },
  barElementStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRightWidth: 0,
    borderTopRightWidth: 0,
    borderBottomRightRadius: 0
  },
  barOutlineStyle: {

  },
  barContainerStyle:{
    position: 'absolute',
    width: '20%',
    height: '100%',
    top: 0,
    left: 0,
    backgroundColor: '#00ccff'
  },
  headerContainerStyle: {
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd'
  },
  headerTextStyle: {
    marginLeft: 20,
    fontSize: 30,
    fontWeight: '100'
  }
}

export default UniversityDetails;
