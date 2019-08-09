import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';

class HomePost extends Component {
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
              <Text>{this.props.name}</Text>
              <Text note style={styles.customerText}> {this.props.university} / {this.props.major} </Text>
              <Text note style={styles.customerText}>
                <Icon name='ios-pin' style={styles.customerIcon} /> {this.props.location}</Text>
            </Body>
          </Left>
        </CardItem>

        <CardItem>
          <Image source={images[this.props.imageSource]}
                 style={styles.postImage}/>
        </CardItem>

        <CardItem>
          <Text style={styles.likesText}>{this.props.likes} likes</Text>
        </CardItem>

        <CardItem>
          <Text style={styles.postText}>
           {this.props.content}
          </Text>
        </CardItem>

        <CardItem>
          <Left>
            <Icon name='ios-heart' />
            <Text>    </Text>
            <Icon name='ios-send' />
          </Left>

          <Right>
            <Text style={styles.readMoreText} onPress={() => this.props.navigation.navigate('')}>Read more...</Text>
          </Right>
        </CardItem>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  customerText: {
    color: 'gray',
    fontSize: 10
  },

  customerIcon: {
    fontSize: 10,
    color: 'gray'
  },

  postImage: {
    height: 250,
    width: '100%'
  },

  likesText: {
    color: 'gray'
  },

  postText: {
    color: 'gray',
  },

  readMoreText: {
    color: 'gray',
  },
})

export default HomePost;
