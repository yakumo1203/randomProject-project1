import React, { Component } from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import { Container, Header, Left, Icon, Body, Right, Content, Card } from 'native-base';

class EditProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Yakumo Asano',
      username: 'yakumo1203',
      password: 'Yakumo19981203',
      school: 'Seattle Central College',
      major: 'Computer Science',
      birthday: 'December 3rd, 1998',
    }
  }

  render() {
    return (
      <Container>

        <Header>
          <Left>
            <Text onPress={() => this.kkd()}> Close </Text>
          </Left>
          <Body><Text style={{ fontWeight: '300', fontSize: 20 }}>Edit My Profile</Text></Body>
          <Right>
            <Text style={{ color: '#00ccff' }}>Done</Text>
          </Right>
        </Header>

        <Content>

          <Card>
            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: 'column', alignItems: 'center', paddingTop: 5 }}>
                <Image source={require('../../../img/FORIS_Aviation.jpg')}
                       style={{ height: 75, width:75, borderRadius: 37.5 }}/>
                <Text style={{ color: '#00ccff', paddingTop: 10, paddingBottom: 5}}>Chenge My Picture</Text>
              </View>
            </View>
          </Card>

          <Card style={{ height: 40 }}>
            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: 'row', paddingTop: 10, paddingLeft: 20 }}>
                <Text style={{ fontWeight: '400' }}>Name: </Text>
                <View style={{ paddingLeft: 48 }}>
                  <TextInput style={{ borderBottomWidth: 1, borderColor: '#00ccff' }}
                             onChangeText={(name) => this.setState({name})}
                             value={this.state.name}
                             />
                </View>
              </View>
            </View>
          </Card>

          <Card style={{ height: 40 }}>
            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: 'row', paddingTop: 10, paddingLeft: 20 }}>
                <Text style={{ fontWeight: '400' }}>Username: </Text>
                <View style={{ paddingLeft: 20 }}>
                  <TextInput style={{ borderBottomWidth: 1, borderColor: '#00ccff' }}
                             onChangeText={(username) => this.setState({username})}
                             value={this.state.username}
                             />
                </View>
              </View>
            </View>
          </Card>

          <Card style={{ height: 40 }}>
            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: 'row', paddingTop: 10, paddingLeft: 20 }}>
                <Text style={{ fontWeight: '400' }}>Password: </Text>
                <View style={{ paddingLeft: 21 }}>
                  <TextInput style={{ borderBottomWidth: 1, borderColor: '#00ccff' }}
                             onChangeText={(password) => this.setState({password})}
                             value={this.state.password}
                             />
                </View>
              </View>
            </View>
          </Card>

          <Card style={{ height: 40 }}>
            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: 'row', paddingTop: 10, paddingLeft: 20 }}>
                <Text style={{ fontWeight: '400' }}>School: </Text>
                <View style={{ paddingLeft: 37 }}>
                  <TextInput style={{ borderBottomWidth: 1, borderColor: '#00ccff' }}
                             onChangeText={(school) => this.setState({school})}
                             value={this.state.school}
                             />
                </View>
              </View>
            </View>
          </Card>

          <Card style={{ height: 40 }}>
            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: 'row', paddingTop: 10, paddingLeft: 20 }}>
                <Text style={{ fontWeight: '400' }}>Major: </Text>
                <View style={{ paddingLeft: 45 }}>
                  <TextInput style={{ borderBottomWidth: 1, borderColor: '#00ccff' }}
                             onChangeText={(major) => this.setState({major})}
                             value={this.state.major}
                             />
                </View>
              </View>
            </View>
          </Card>

          <Card style={{ height: 40 }}>
            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: 'row', paddingTop: 10, paddingLeft: 20 }}>
                <Text style={{ fontWeight: '400' }}>Birthday: </Text>
                <View style={{ paddingLeft: 26 }}>
                  <TextInput style={{ borderBottomWidth: 1, borderColor: '#00ccff' }}
                             onChangeText={(birthday) => this.setState({birthday})}
                             value={this.state.birthday}
                             />
                </View>
              </View>
            </View>
          </Card>

        </Content>
      </Container>
    );
  }
}

export default EditProfile;
