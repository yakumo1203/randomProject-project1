import React, { Component } from 'react';
import { View, Image } from 'react-native';

class eachPost extends Component {
  render() {
    return (
      <Card>

        <CardItem>
          <Left>
            <Thumbnail source={require('../../../img/FORIS_HomeGeneral.jpg')} />
            <Body>
              <Text>Yakumo Asano</Text>
              <Text note style={{ color: 'gray', fontSize: 10 }}> Seattle Central College / Computer Science </Text>
              <Text note style={{ color: 'gray', fontSize: 10 }}>
                <Icon name='ios-pin' style={{ fontSize: 10, color: 'gray' }} /> Seattle, WA</Text>
            </Body>
          </Left>
        </CardItem>

        <CardItem>
          <Image source={require('../../../img/FORIS_General2.jpg')}
                 style={{ height: 250, width: '100%' }}/>
        </CardItem>

        <CardItem>
          <Text style={{ color: 'gray' }}>100likes</Text>
        </CardItem>

        <CardItem>
          <Text style={{ color: 'gray' }}>
           wsddiwcygedou
           sdicwouhd
           isybwcdiuh
           wecowuhih
           wdgiuegfiouhu
           weougfoi
           e[fgeriguh]
          </Text>
        </CardItem>

        <CardItem>
          <Left>
            <Icon name='ios-heart' />
            <Text>    </Text>
            <Icon name='ios-send' />
          </Left>
        </CardItem>
      <Card>
    );
  }
}
