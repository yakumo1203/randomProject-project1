import React, { Component } from 'react';
import { Modal, AppRegistry, Image, Text, Dimensions, SafeAreaView, ScrollView, View, TouchableHighlight } from 'react-native';
import { Right, CardItem, Left, Thumbnail, Body, Button, Icon, Card, Content, Container } from 'native-base';

var { width, height } = Dimensions.get('window');

class homeFront extends Component {

  constructor(props) {
    super(props)

    this.state = {
      activeIndex: 0,
      pickerSelection: 'Default value!',
      pickerDisplayed: false,
    }
  }

  setPickerValue(newValue) {
    this.setState({
      pickerSelection: newValue,
    });
  }

  togglePicker() {
    this.setState({
      pickerDisplayed: !this.state.pickerDisplayed
    })
  }

  segmentClicked = (index) => {
    this.setState({
      activeIndex: index,
    })
  }

  renderSection = () => {
    if (this.state.activeIndex === 0) {
      return (

        <View>
          <Card>
            <View style={{ flexDirection: 'column' }}>

              <CardItem>
                <Text style={{ color: 'gray' }}>航空関係</Text>
              </CardItem>

              <CardItem>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                  グリーンカードを取得する方法は？
                </Text>
              </CardItem>

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
                <Text>
                  sdibvsciwbovbuobvobwoubeo
                  fwboubwoubcowbcuo
                  iyscibwdcibwibuciouqdob
                </Text>
              </CardItem>

              <CardItem>
                <Left>
                  <Text style={{ color: 'gray' }}>Yesterday</Text>
                </Left>

                <Right>
                  <Text style={{ color: 'gray' }}>Read more...</Text>
                </Right>
              </CardItem>

            </View>
          </Card>

          <Card>
            <View style={{ flexDirection: 'column' }}>

              <CardItem>
                <Text style={{ color: 'gray' }}>航空関係</Text>
              </CardItem>

              <CardItem>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                  グリーンカードを取得する方法は？
                </Text>
              </CardItem>

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
                <Text>
                  sdibvsciwbovbuobvobwoubeo
                  fwboubwoubcowbcuo
                  iyscibwdcibwibuciouqdob
                </Text>
              </CardItem>

              <CardItem>
                <Left>
                  <Text style={{ color: 'gray' }}>Yesterday</Text>
                </Left>

                <Right>
                  <Text style={{ color: 'gray' }}>Read more...</Text>
                </Right>
              </CardItem>

            </View>
          </Card>

          <Card>
            <View style={{ flexDirection: 'column' }}>

              <CardItem>
                <Text style={{ color: 'gray' }}>航空関係</Text>
              </CardItem>

              <CardItem>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                  グリーンカードを取得する方法は？
                </Text>
              </CardItem>

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
                <Text>
                  sdibvsciwbovbuobvobwoubeo
                  fwboubwoubcowbcuo
                  iyscibwdcibwibuciouqdob
                </Text>
              </CardItem>

              <CardItem>
                <Left>
                  <Text style={{ color: 'gray' }}>Yesterday</Text>
                </Left>

                <Right>
                  <Text style={{ color: 'gray' }}>Read more...</Text>
                </Right>
              </CardItem>

            </View>
          </Card>
        </View>

      )
    }
    else if (this.state.activeIndex === 1) {
      return (
        <View>
          <Text>aj</Text>
        </View>
      )
    }
  }

  render() {

    const pickerValues = [
      {
        title: 'Computer Science',
        value: 'computersience',
      },
      {
        title: 'Aviation',
        value: 'dsb',
      },
      {
        title: 'Physics',
        value: 'sdb',
      },
      {
        title: 'Physics',
        value: 'sdb',
      },
      {
        title: 'Physics',
        value: 'sdb',
      },
    ]

		return (
      <Container>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderWidth: 1, borderTopColor: '#eae5e5',
                       borderColor: '#eae5e5', borderBottomColor: '#eae5e5', marginTop: 50 }}>

          <View>
            <Button style={{ backgroundColor: 'white' }} onPress={() => this.togglePicker()} >
              <Icon name='menu' size={10} style={{ color: 'gray', backgroundColor: 'white'}} />
            </Button>

            <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
              <ScrollView>
              <Modal visible={this.state.pickerDisplayed} animationType={'slide'} transparent >
              <View style={{ marginTop: 20, backgroundColor: 'white', top: 30, bottom: 10, left: 0, right: 0, alignItems: 'center', position: 'absolute'}}>
              {pickerValues.map((value, index) => {
                return <TouchableHighlight underlayColor='white' key={index} onPress={() => this.setPickerValue(value.value)} style={{ paddingTop: 4, paddingBottom: 4 }}>
                        <Text>{value.title}</Text>
                      </TouchableHighlight>
              })}

              <TouchableHighlight onPress={() => this.togglePicker()} style={{ paddingTop: 4, paddingBottom: 4 }}>
                <Text style={{ color: '#00ccff' }}>Cancel</Text>
              </TouchableHighlight>

              </View>
              </Modal>
              </ScrollView>
            </View>
          </View>


          <Button transparent onPress={() => this.segmentClicked(0)} active={this.state.activeIndex === 0}>
            <Text style={[this.state.activeIndex === 0 ? { color: '#00ccff' } : { color: 'gray' }]}>Home</Text>
          </Button>

          <Button transparent onPress={() => this.segmentClicked(1)} active={this.state.activeIndex === 1}>
            <Text style={[this.state.activeIndex === 1 ? { color: '#00ccff' } : { color: 'gray' }]}>Discover</Text>
          </Button>

          <Button transparent onPress={() => this.segmentClicked(2)} active={this.state.activeIndex === 2}>
            <Text style={[this.state.activeIndex === 2 ? { color: '#00ccff' } : { color: 'gray' }]}>Notify</Text>
          </Button>

          <Button style={{ backgroundColor: 'white' }}>
            <Icon name='search' size={10} style={{ color: 'gray', backgroundColor: 'white'}} />
          </Button>

        </View>

        <Content>
        {this.renderSection()}
        </Content>


      </Container>
		);
	}
}

export default homeFront;
