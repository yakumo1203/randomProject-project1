import React, { Component } from 'react';
import { AppRegistry, TouchableHighlight, View, Text, TouchableOpacity, StyleSheet, Animated, ScrollView, Image, Dimensions } from 'react-native';
import SeminorElement from './SeminorElements';

const { width } = Dimensions.get('window');

class Apply extends Component {

  state = {
    active: 0,
    xTabOne: 0,
    xTabTwo: 0,
    translateX: new Animated.Value(0),
    translateXTabOne: new Animated.Value(0),
    translateXTabTwo: new Animated.Value(width),
    translateY: -1000,
  }

  handleSlide = type => {
    let { active,
          xTabOne,
          xTabTwo,
          translateX,
          translateXTabOne,
          translateXTabTwo
        } = this.state;

    Animated.spring(translateX, {
      toValue: type,
      duration: 100,
    }).start();
    if (active === 0) {
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: 0,
          duration: 100,
        }).start(),
        Animated.spring(translateXTabTwo, {
          toValue: width,
          duration: 100,
        }).start(),
      ])
    } else {
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: -width,
          duration: 100,
        }).start(),
        Animated.spring(translateXTabTwo, {
          toValue: 0,
          duration: 100,
        }).start(),
      ])
    }
  }

  render() {

    let { xTabOne,
          xTabTwo,
          translateX,
          active,
          translateXTabOne,
          translateXTabTwo,
          translateY
        } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <View style={styles.overAll}>
          <View style={styles.twoButtonArea}>
            <Animated.View style={{ position: 'absolute',
                                    width: '50%',
                                    height: '100%',
                                    top: 0,
                                    left: 0,
                                    backgroundColor: '#00ccff',
                                    borderRadius: 4,
                                    transform: [{ translateX }] }} />

              <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderWidth: 1,
                                        borderColor: '#00ccff', borderRightWidth: 0, borderTopRightWidth: 0,
                                        borderBottomRightRadius: 0, borderRadius: 4 }}
                                onLayout={event => this.setState({ xTabOne: event.nativeEvent.layout.x })}
                                onPress={ () => this.setState({ active: 0 }, () => this.handleSlide(xTabOne))}>
                <Text>企業</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderWidth: 1,
                                        borderColor: '#00ccff', borderLeftWidth: 0, borderTopLeftWidth: 0,
                                        borderBottomLeftRadius: 0, borderRadius: 4 }}
                                onLayout={event => this.setState({ xTabTwo: event.nativeEvent.layout.x })}
                                onPress={ () => this.setState({ active: 1 }, () => this.handleSlide(xTabTwo))}>
                <Text>セミナー</Text>
              </TouchableOpacity>
          </View>

          <ScrollView>
            <Animated.View style={{ alignItems: 'center', justifyContent: 'center', transform: [{ translateX: translateXTabOne }]}}
                           onLayout={event => this.setState({ translateY: event.nativeEvent.layout.height })} >
              <Text>
                誠に申し訳ありませんが、このサービスは開始されておりません。
                できる限り早くスタート致しますので、もう暫くお待ちください。
                よろしくお願い申し上げます。
              </Text>
              <Text style={{ alignItems: 'center' }}>FORIS</Text>
            </Animated.View>

            <Animated.View style={{ justifyContent: 'center', transform: [{ translateX: translateXTabTwo },
                                  { translateY: -translateY }] }}>

              <View style={{ borderBottomWidth: 1, borderBottomColor: 'gray' }} />
              <SeminorElement
                seminorImage={require('../../../img/FORIS_HomeGeneral.jpg')}
                seminorTitle="ボスキャリ対策講座"
                seminorText="10000￥"
              />

              <View style={styles.borderBetweenSeminor} />
              <SeminorElement
                seminorImage={require('../../../img/FORIS_HomeGeneral.jpg')}
                seminorTitle="ビジネスマナー対策講座"
                seminorText="10000yen"
              />

              <View style={styles.borderBetweenSeminor} />
              <SeminorElement
                seminorImage={require('../../../img/FORIS_HomeGeneral.jpg')}
                seminorTitle="ビジネスマナー対策講座"
                seminorText="10000yen"
              />

              <View style={styles.borderBetweenSeminor} />
              <SeminorElement
                seminorImage={require('../../../img/FORIS_HomeGeneral.jpg')}
                seminorTitle="ビジネスマナー対策講座"
                seminorText="10000yen"
              />

              <View style={styles.borderBetweenSeminor} />
              <SeminorElement
                seminorImage={require('../../../img/FORIS_HomeGeneral.jpg')}
                seminorTitle="ビジネスマナー対策講座"
                seminorText="10000yen"
              />

              <View style={styles.borderBetweenSeminor} />
              <SeminorElement
                seminorImage={require('../../../img/FORIS_HomeGeneral.jpg')}
                seminorTitle="ビジネスマナー対策講座"
                seminorText="10000yen"
              />


              <View style={{ paddingBottom: 100 }} />
            </Animated.View>
          </ScrollView>
        </View>
      </View>
    )
  }
}

export default Apply;

const styles = StyleSheet.create({
  overAll: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },

  twoButtonArea: {
    width: '70%',
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
    marginTop: 80,
    marginBottom: 20,
    height: 36,
    position: 'relative'
  },

  borderBetweenSeminor: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingTop: 20,
  },

});
