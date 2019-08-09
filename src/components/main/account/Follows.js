import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CardItem, Card, Container, Thumbnail, Header, Left, Body, Icon, Right, Content, Item, Input, Button } from 'native-base';
import { SearchBar } from 'react-native-elements';

class Follows extends Component {

  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {

    const { search } = this.state;

    return (
      <Container>
        <Header>
          <Left>
            <Icon name='arrow-back' onPress={() => this.props.navigation.goBack()}/>
          </Left>

          <Body>
            <Text>
              Follows
            </Text>
          </Body>

          <Right>

          </Right>
        </Header>

        <Content searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>

          

          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../../../img/FORIS_HomeGeneral.jpg')} />
                <Body>
                  <Text>Yakumo Asano</Text>
                </Body>
              </Left>
              <Right>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ paddingTop: 13, borderRadius: 1, color: '#00ccff', fontSize: 12 }}>
                    Following
                  </Text>
                  <Button style={{ backgroundColor: 'white' }}>
                    <Icon name='more' style={{ paddingLeft: 5, color: 'blue' }}/>
                  </Button>
                </View>
              </Right>
            </CardItem>

            <CardItem>
              <Left>
                <Thumbnail source={require('../../../img/FORIS_HomeGeneral.jpg')} />
                <Body>
                  <Text>Yakumo Asano</Text>
                </Body>
              </Left>
              <Right>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ paddingTop: 13, borderRadius: 1, color: '#00ccff', fontSize: 12 }}>
                    Following
                  </Text>
                  <Button style={{ backgroundColor: 'white' }}>
                    <Icon name='more' style={{ paddingLeft: 5, color: 'blue' }}/>
                  </Button>
                </View>
              </Right>
            </CardItem>

            <CardItem>
              <Left>
                <Thumbnail source={require('../../../img/FORIS_HomeGeneral.jpg')} />
                <Body>
                  <Text>Yakumo Asano</Text>
                </Body>
              </Left>
              <Right>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ paddingTop: 13, borderRadius: 1, color: '#00ccff', fontSize: 12 }}>
                    Following
                  </Text>
                  <Button style={{ backgroundColor: 'white' }}>
                    <Icon name='more' style={{ paddingLeft: 5, color: 'blue' }}/>
                  </Button>
                </View>
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Thumbnail source={require('../../../img/FORIS_HomeGeneral.jpg')} />
                <Body>
                  <Text>Yakumo Asano</Text>
                </Body>
              </Left>
              <Right>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ paddingTop: 13, borderRadius: 1, color: '#00ccff', fontSize: 12 }}>
                    Following
                  </Text>
                  <Button style={{ backgroundColor: 'white' }}>
                    <Icon name='more' style={{ paddingLeft: 5, color: 'blue' }}/>
                  </Button>
                </View>
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Thumbnail source={require('../../../img/FORIS_HomeGeneral.jpg')} />
                <Body>
                  <Text>Yakumo Asano</Text>
                </Body>
              </Left>
              <Right>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ paddingTop: 13, borderRadius: 1, color: '#00ccff', fontSize: 12 }}>
                    Following
                  </Text>
                  <Button style={{ backgroundColor: 'white' }}>
                    <Icon name='more' style={{ paddingLeft: 5, color: 'blue' }}/>
                  </Button>
                </View>
              </Right>
            </CardItem>


          </Card>
        </Content>

      </Container>
    )
  }
}

const styles = StyleSheet.create({

  searchBar: {
    color: 'white'
  }
})

export default Follows;
