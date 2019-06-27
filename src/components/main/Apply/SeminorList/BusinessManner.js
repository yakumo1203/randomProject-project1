import React, { Component } from 'react';
import { View, Text, Image, SafeAreaView, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { Card, CardItem, Content, Left, Thumbnail, Body, Icon } from 'native-base';

class BusinessManner extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>

          <View>
            <Image source={require('../../../../img/FORIS_BusinessManner.jpg')}
                   style={{ height: 200, width: '100%' }}/>
          </View>

          <View style={{ borderBottomWidth: 1, borderBottomColor: '#dddddd' }} >
            <Text style={{ fontSize: 30, color: 'gray', fontWeigh: '400' }}>ビジネスマナー講義</Text>
          </View>

          <View style={{ alignItems: 'center', marginTop: 20 }}>
            <Text style={{ color: '#00ccff', fontWeight: '300', fontSize: 30 }}>-概要-</Text>
          </View>

          <View style={{ marginLeft: 20, marginRight: 20, borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
            <Text>
              {'\n'}
              留学生にとって、現在、就職において最も重視されるのがビジネスマナーです。{'\n'}
              日本の企業に就職しようと考えている場合は特に必要となってきます。{'\n'}
              多くの日本人留学生は米国での生活に慣れてしまい、日本の文化に対するビジネスマナー
              の欠如を採用時に企業から見られてしまいます。{'\n'}
              ですが、海外留学経験者は社会に出た時の即戦力には十分な力があります。{'\n'}
              そこで、日本の大学生とを比べてみると、ビジネスマナーという点がすごく劣っている
              ということになります。ですので、海外留学経験者がビジネスマナーを習得すれば、
              内定獲得の機会がかなり上がります。{'\n'}
              このセミナーが皆様の就職活動に大きく役立つもので御座います。{'\n'}
            </Text>

            <View style={{ marginLeft: 20, marginRight: 20, marginBottom: 20 }}>
              <TouchableOpacity style={{ borderColor: '#00ccff', marginTop: 20, alignItems: 'center', borderWidth: 1, justifyContent: 'center', height: 30 }}
                                onPress={() => Linking.openURL('https://studyabroadsguide.com/2019/02/26/kansas-state-university/')}>
                <Text style={{ fontWeight: '100', color: 'black' }}>Apply</Text>
              </TouchableOpacity>
            </View>

          </View>

          <Card>
          <View style={{ marginTop: 20, alignItems: 'center' }}>
            <Text style={{ color: '#00ccff', fontWeight: '300', fontSize: 30 }}>-講師紹介-</Text>
          </View>

          <Card>
          <View style={{ marginTop: 20, flexDirection: 'row', marginRight: 5, marginBottom: 20 }}>
            <Image style={{ height: 200, width: '50%' }}
                   source={require('../../../../img/FORIS_BusinessMannerInstructor.jpg')} />

            <View style={{ width: '50%', borderBottomWidth: 1, borderBottomColor: '#dddddd'  }}>
              <Text>
                最所　千依（さいしょちえ）
                {'\n'}
                {'\n'}
                元外資系航空会社CA{'\n'}
               （エミレーツ、ノースウエスト航空、デルタ航空、KLMオランダ航空）
                {'\n'}
                {'\n'}
                現在は主に採用教育コンサルタントとして活動IC（独立業務請負人）
              </Text>
            </View>
          </View>
          </Card>
          </Card>

          <View style={{ alignItems: 'center' }}>
            <Text style={{ color: '#00ccff', fontWeight: '300', fontSize: 30 }}>参加予定ユーザー</Text>
          </View>

          <View style={{ paddingLeft: 20, paddingTop: 20, paddingRight: 20 }}>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={require('../../../../img/FORIS_HomeGeneral.jpg')} />
                  <Body>
                    <Text>Yakumo Asano</Text>
                    <Text note style={{ color: 'gray', fontSize: 10 }}> Seattle Central College / Computer Science </Text>
                    <Text note style={{ color: 'gray', fontSize: 10 }}>
                      <Icon name='ios-pin' style={{ fontSize: 10, color: 'gray' }} /> Seattle, WA</Text>
                  </Body>
                </Left>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={require('../../../../img/FORIS_HomeGeneral.jpg')} />
                  <Body>
                    <Text>Yakumo Asano</Text>
                    <Text note style={{ color: 'gray', fontSize: 10 }}> Seattle Central College / Computer Science </Text>
                    <Text note style={{ color: 'gray', fontSize: 10 }}>
                      <Icon name='ios-pin' style={{ fontSize: 10, color: 'gray' }} /> Seattle, WA</Text>
                  </Body>
                </Left>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={require('../../../../img/FORIS_HomeGeneral.jpg')} />
                  <Body>
                    <Text>Yakumo Asano</Text>
                    <Text note style={{ color: 'gray', fontSize: 10 }}> Seattle Central College / Computer Science </Text>
                    <Text note style={{ color: 'gray', fontSize: 10 }}>
                      <Icon name='ios-pin' style={{ fontSize: 10, color: 'gray' }} /> Seattle, WA</Text>
                  </Body>
                </Left>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={require('../../../../img/FORIS_HomeGeneral.jpg')} />
                  <Body>
                    <Text>Yakumo Asano</Text>
                    <Text note style={{ color: 'gray', fontSize: 10 }}> Seattle Central College / Computer Science </Text>
                    <Text note style={{ color: 'gray', fontSize: 10 }}>
                      <Icon name='ios-pin' style={{ fontSize: 10, color: 'gray' }} /> Seattle, WA</Text>
                  </Body>
                </Left>
              </CardItem>
            </Card>
          </View>

        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default BusinessManner;
