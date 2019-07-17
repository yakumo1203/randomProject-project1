import React, { Component } from 'react';
import { View, Text, Image, SafeAreaView, ScrollView, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { Card, CardItem, Content, Left, Thumbnail, Body, Icon, Container, Header, ActionSheet, Right } from 'native-base';

var BUTTONS = ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

class BusinessManner extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Icon name='arrow-round-back' style={styles.iconColor} onPress={() => this.props.navigation.goBack()} />
          </Left>

          <Right>
            <Icon name='more' style={styles.iconColor} onPress={() =>
            ActionSheet.show(
              {
                options: BUTTONS,
                cancelButtonIndex: CANCEL_INDEX,
                destructiveButtonIndex: DESTRUCTIVE_INDEX,
                title: "Testing ActionSheet"
              },
              buttonIndex => {
                this.setState({ clicked: BUTTONS[buttonIndex] });
              }
            )}/>
          </Right>
        </Header>

      <Content>
      <SafeAreaView>
        <ScrollView>

          <View>
            <Image source={require('../../../../img/FORIS_BusinessManner.jpg')}
                   style={styles.imageView} />
          </View>

          <View style={styles.titleView} >
            <Text style={styles.titleText}>ビジネスマナー講義</Text>
          </View>

          <View style={styles.subTitleView}>
            <Text style={styles.subTitleText}>-概要-</Text>
          </View>

          <View style={styles.contentView}>
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

            <View style={styles.applyButtonView}>
              <TouchableOpacity style={styles.applyButtonTouchableOpacity}
                                onPress={() => Linking.openURL('https://studyabroadsguide.com/2019/02/26/kansas-state-university/')}>
                <Text style={styles.applyButtonText}>Apply</Text>
              </TouchableOpacity>
            </View>

          </View>

          <Card>
          <View style={styles.subTitleView}>
            <Text style={styles.subTitleText}>-講師紹介-</Text>
          </View>

          <Card>
          <View style={styles.cardView}>
            <Image style={styles.cardImageView}
                   source={require('../../../../img/FORIS_BusinessMannerInstructor.jpg')} />

            <View style={styles.introducingView}>
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

          <View style={styles.subTitleView}>
            <Text style={styles.subTitleText}>参加予定ユーザー</Text>
          </View>

          <View style={styles.customerView}>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={require('../../../../img/FORIS_HomeGeneral.jpg')} />
                  <Body>
                    <Text>Yakumo Asano</Text>
                    <Text note style={styles.customerText}> Seattle Central College / Computer Science </Text>
                    <Text note style={styles.customerText}>
                      <Icon name='ios-pin' style={styles.iconStyle} /> Seattle, WA</Text>
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
                    <Text note style={styles.customerText}> Seattle Central College / Computer Science </Text>
                    <Text note style={styles.customerText}>
                      <Icon name='ios-pin' style={styles.iconStyle} /> Seattle, WA</Text>
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
                    <Text note style={styles.customerText}> Seattle Central College / Computer Science </Text>
                    <Text note style={styles.customerText}>
                      <Icon name='ios-pin' style={styles.iconStyle} /> Seattle, WA</Text>
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
                    <Text note style={styles.customerText}> Seattle Central College / Computer Science </Text>
                    <Text note style={styles.customerText}>
                      <Icon name='ios-pin' style={styles.iconStyle} /> Seattle, WA</Text>
                  </Body>
                </Left>
              </CardItem>
            </Card>
          </View>
        </ScrollView>
      </SafeAreaView>
      </Content>

      </Container>
    )
  }
}

const styles = StyleSheet.create({
  iconColor: {
    color: 'gray'
  },

  imageView: {
    height: 200,
    width: '100%',
  },

  titleView: {
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd'
  },

  titleText: {
    fontSize: 30,
    color: 'gray',
    fontWeight: '400'
  },

  subTitleView: {
    alignItems: 'center',
    marginTop: 20
  },

  subTitleText: {
    color: '#00ccff',
    fontWeight: '300',
    fontSize: 30
  },

  contentView: {
    marginLeft: 20,
    marginRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd'
  },

  applyButtonView: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20
  },

  applyButtonTouchableOpacity: {
    borderColor: '#00ccff',
    marginTop: 20,
    alignItems: 'center',
    borderWidth: 1,
    justifyContent: 'center',
    height: 30
  },

  applyButtonText: {
    fontWeight: '100',
    color: 'black'
  },

  cardView: {
    marginTop: 20,
    flexDirection: 'row',
    marginRight: 5,
    marginBottom: 20
  },

  cardImageView: {
    height: 200,
    width: '50%'
  },

  introducingView: {
    width: '50%',
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd'
  },

  customerView: {
    paddingLeft: 20,
    paddingTop: 20,
    paddingRight: 20
  },

  customerText: {
    color: 'gray',
    fontSize: 10
  },

  iconStyle: {
    fontSize: 10,
    color: 'gray'
  },

})

export default BusinessManner;
