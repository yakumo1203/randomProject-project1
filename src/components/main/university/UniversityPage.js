import React, { Component } from 'react';
import { SafeAreaView, ScrollView, View, Text, Modal, TouchableHighlight, Alert } from 'react-native';
import { Header, Right, Left, Content, Container, Body, Icon, Button, Input, Item, Card } from 'native-base';
import { UniversityRow } from './common';

class UniversityPage extends Component {

  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <Container>
      <Header style={{ backgroundColor: 'white' }}>
        <Left>
          <Button style={{ backgroundColor: 'white' }} onPress={() => this.props.navigation.toggleDrawer()} >
            <Icon name='menu' style={{ color: 'gray' }}/>
          </Button>
        </Left>
        <Body>
          <Text style={{ fontSize: 17 }}>University</Text>
        </Body>
        <Right>
          <Button style={{ backgroundColor: 'white' }} onPress={() => { this.setModalVisible(!this.state.modalVisible); }}>
            <Icon name='search' style={{ color: 'gray' }}/>
          </Button>
        </Right>
      </Header>

      <View style={{ marginTop: 22 }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ height: 300, width: 300, backgroundColor: '#dddddd', borderRadius: 17, alignItems: 'center', justifyContent: 'center', borderColor: 'black' }}>
              <Text>大学を検索</Text>

              <View style={{ width: '90%', alignItems: 'center', justifyContent: 'center', paddingTop: 20 }}>
              <Item style={{ backgroundColor: 'white', borderRadius: 30 }}>
                <Icon name="ios-search" />
                <Input placeholder="Search" />
                <Icon name="ios-school" />
              </Item>
              </View>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Button transparent>
                <Text style={{ color: '#00ccff', alignItems: 'center', justifyContent: 'center' }}>Search</Text>
              </Button>
              </View>

              <TouchableHighlight
                underlayColor='#dddddd'
                style={{ paddingTop: 40 }}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Cancel</Text>
              </TouchableHighlight>
            </View>
          </View>
          </View>
        </Modal>
      </View>

      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView scrollEventThrottle={16}>
          <View>
            <UniversityRow />

            <UniversityRow
              text='あなたにおすすめ'
              header='Kansas State University'
              imgUri1={require('../../../img/KansasStateUniversity/FORIS_KSU.jpg')}
              imgUri2={require('../../../img/StateUniversityNewYork/FORIS_SUNY.jpg')}
              imgUri3={require('../../../img/ArkansasStateUniversity/FORIS_ArkansasSU.jpg')}
              imgUri4={require('../../../img/UCLosAngeles/FORIS_UCLA.jpg')}
              imgUri5={require('../../../img/KansasStateUniversity/FORIS_KSU.jpg')}
              universityPage='KansasStateUniversity'
              universityRowStyle={{ paddingTop: 0, marginTop: 40 }}
              navigation1='KansasStateUniversity'
              navigation2='KansasStateUniversity'
              navigation3='KansasStateUniversity'
              navigation4='KansasStateUniversity'
              navigation5='KansasStateUniversity'
            />

            <UniversityRow
              text='あなたが見た大学'
              header='Kansas State University'
              imgUri={require('../../../img/FORIS_Aviation.jpg')}
              universityRowStyle={{ paddingTop: 0, marginTop: 40 }}
              navigation={this.props.navigation}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
      </Container>
    );
  }
}

export default UniversityPage;
