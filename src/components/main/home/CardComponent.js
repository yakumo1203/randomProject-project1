import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';

class CardComponent extends Component {
  render() {
    const images = {

      "1": require('../../../img/FORIS_HomeGeneral.jpg'),
      "2": require('../../../img/FORIS_Aviation.jpg'),
      "3": require('../../../img/FORIS_ComputerScience.jpg'),
    }
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={require('../../../img/FORIS_HomeGeneral.jpg')} />
            <Body>
              <Text>Yakumo Asano</Text>
              <Text note style={{ color: 'gray', fontSize: 10 }}> Seattle Central College / Computer Science </Text>
              <Text note style={{ color: 'gray', fontSize: 10 }}> Seattle, WA</Text>
            </Body>
          </Left>
        </CardItem>

        <CardItem>
          <Body>
            <Text>
              <Text style={{ fontWeight: '900' }}>Yakumo </Text>
              iyscibwdcibwibuci
              iwbcdcbib
              wuibcubobwco
              ouwbco
              wocuboucbobob
              oeuwbcoubeoubobobcdw
              oubdqwoucbuoehxoi
              ieugfuwcinogwoircgoi
              iwhxr9 h23 98cxh 9
            </Text>
          </Body>
        </CardItem>

        <CardItem cardBody>
          <Image source={images[this.props.imageSource]}
                 style={{ height: 200, width: null, flex: 1 }} />
        </CardItem>

        <CardItem style={{ height: 45 }}>
          <Left style={{ paddingLeft: 10 }}>
            <Button transparent>
              <Icon name="ios-heart" style={{ color: 'black' }} />
            </Button>
            <Text>100</Text>

            <Button transparent style={{ paddingLeft: 30 }}>
              <Icon name="ios-chatbubbles" style={{ color: 'black' }} />
            </Button>
            <Text>16</Text>
          </Left>

        </CardItem>

      </Card>
    )
  }
}

export default CardComponent;
