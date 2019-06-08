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
              <Text>Yakumo</Text>
              <Text note> Dec 3, 1998</Text>
            </Body>
          </Left>
        </CardItem>

        <CardItem cardBody>
          <Image source={images[this.props.imageSource]}
                 style={{ height: 200, width: null, flex: 1 }} />
        </CardItem>

        <CardItem style={{ height: 45 }}>
          <Left>

            <Button transparent>
              <Icon name="ios-heart-outline" style={{ color: 'black' }} />
            </Button>

            <Button transparent>
              <Icon name="ios-chatbubbles-outline" style={{ color: 'black' }} />
            </Button>

            <Button transparent>
              <Icon name="ios-send-outline" style={{ color: 'black' }} />
            </Button>

          </Left>
        </CardItem>

        <CardItem style={{ height: 35 }}>
          <Text>{this.props.likes}</Text>
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
      </Card>
    )
  }
}

export default CardComponent;
