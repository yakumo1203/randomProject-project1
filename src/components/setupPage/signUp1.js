import React, { Component } from 'react';
import { Action } from 'react-native-router-flux';
import { ImageBackground, Text, View, StyleSheet } from 'react-native';
import { FadeInView, SignInSection } from './common';

class SignUp1 extends Component {
    render() {
      return (
        <View>
          <ImageBackground
            source={('../../img/ImageForis1.jpg')}
            style={{ width: '100%', height: '100%' }}
          >
          <Text style={styles.title}>FORIS</Text>

          <Text style={styles.sub}>For International Students</Text>

          <FadeInView>
            <Text style={styles.text1}>
              一般の方（現在留学されていない方）
            </Text>
            <SignInSection
              text='一般会員'
              onPress={() => Action.signUp1()}
              top='300'
            />
            <SignInSection
              text='留学生会員'
              onPress={() => Action.signUp1()}
              top='300'
            />
            <SignInSection
              text='法人'
              onPress={() => Action.signUp1()}
              top='300'
            />
          </FadeInView>

          </ImageBackground>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    color: 'white',
    top: 160,
    textAlign: 'center',
  },
  sub: {
    fontSize: 20,
    color: 'white',
    top: 170,
    textAlign: 'center',
  },
  text1: {
    fontSize: 15,
    top: 300,
    textAlign: 'center',
    color: 'white',
  },
  text2: {
    fontSize: 15,
    top: 330,
    textAlign: 'center',
    color: 'white',
  },
});

export { SignUp1 };
