import React, { Component } from 'react';
import { Image,
         Text,
         TouchableOpacity,
         CameraRoll,
         ScrollView,
         Button,
         StyleSheet
       } from 'react-native';
import { Card, CardItem, CardComponent, Content, Item, Input, Container, Thumbnail, Body, Textarea, Form, Icon, Header, Right, Left } from 'native-base';

class createNewPost extends Component {
  _handleButtonPress = () => {
   CameraRoll.getPhotos({
       first: 20,
       assetType: 'Photos',
     })
     .then(r => {
       this.setState({ photos: r.edges });
     })
     .catch((err) => {
        //Error Loading Images
     });
   };

  render() {
    return (
      <Container>
        <Header style={styles.headerStyle}>
          <Left>
            <TouchableOpacity style={styles.leftTouchableOpacity}
                              onPress={() => this.props.navigation.goBack()}>
              <Text style={styles.headerText}>   cancel   </Text>
            </TouchableOpacity>
          </Left>
          <Right>
            <TouchableOpacity style={styles.rightTouchableOpacity}>
              <Text style={styles.headerText}>   Post   </Text>
            </TouchableOpacity>
          </Right>
        </Header>
        <Content>

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
          <Form>
            <Textarea rowSpan={10} bordered placeholder="what is happening? " />
          </Form>
          <Button title="Load Images" onPress={this._handleButtonPress} />
          <ScrollView>
             {this.state.photos.map((p, i) => {
             return (
               <Image
                 key={i}
                 style={{
                   width: 300,
                   height: 100,
                 }}
                 source={{ uri: p.node.image.uri }}
               />
             );
           })}
           </ScrollView>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: 'white'
  },

  leftTouchableOpacity: {
    borderRadius: 7,
    backgroundColor: 'white'
  },

  headerText: {
    color: '#00ccff',
    fontSize: 15
  },

  rightTouchableOpacity: {
    borderRadius: 5,
    backgroundColor: 'white'
  }
})

export default createNewPost;
