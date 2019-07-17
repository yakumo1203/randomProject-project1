import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Card, CardItem, CardComponent, Content, Item, Input, Container, Thumbnail, Body, Textarea, Form, Picker, Icon, Header, Right, Left } from 'native-base';

class createNewQuestion extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: 'key0'
    };
  }

  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }

  render() {
    return (
      <Container>

        <Header style={styles.headerStyle}>
          <Left>
            <TouchableOpacity style={styles.leftHeaderTouchableOpacity} onPress={() => this.props.navigation.goBack()}>
              <Text style={styles.leftHeaderText}>   Cancel   </Text>
            </TouchableOpacity>
          </Left>
          <Body>
            <Text style={styles.bodyHeaderText}> Questions </Text>
          </Body>
          <Right>
            <TouchableOpacity style={styles.rightHeaderTouchableOpacity}>
              <Text style={styles.rightHeaderText}>   Post   </Text>
            </TouchableOpacity>
          </Right>
        </Header>

        <Content>
        <CardItem>
          <Left>
            <Thumbnail source={require('../../../img/FORIS_HomeGeneral.jpg')} />
            <Body>
              <Text>Yakumo Asano</Text>
              <Text note style={styles.customerText}> Seattle Central College / Computer Science </Text>
              <Text note style={styles.customerText}>
                <Icon name='ios-pin' style={styles.customerIcon} /> Seattle, WA</Text>
            </Body>
          </Left>
        </CardItem>

        <Card>
          <Form>
            <Picker
              mode="dropdown"
              iosHeader="relationship"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="航空関係" value="key0" />
              <Picker.Item label="IT関係" value="key1" />
              <Picker.Item label="宇宙関係" value="key2" />
              <Picker.Item label="ビジネス関係" value="key3" />
              <Picker.Item label="国際関係" value="key4" />
            </Picker>
          </Form>
          <Form>
            <Textarea rowSpan={10} bordered placeholder="what do you want to ask? " />
          </Form>
        </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: 'white',
  },

  leftHeaderTouchableOpacity: {
    borderRadius: 7,
    backgroundColor: 'white'
  },

  leftHeaderText: {
    color: '#00ccff',
    fontSize: 15
  },

  bodyHeaderText: {
    color: 'black',
    fontSize: 17
  },

  rightHeaderTouchableOpacity: {
    borderRadius: 5,
    backgroundColor: 'white'
  },

  rightHeaderText: {
    color: '#00ccff',
    fontSize: 15
  },

  customerText: {
    color: 'gray',
    fontSize: 10
  },

  customerIcon: {
    fontSize: 10,
    color: 'gray'
  },

})

export default createNewQuestion;
