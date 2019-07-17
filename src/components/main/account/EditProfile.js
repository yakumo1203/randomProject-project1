import React, { Component } from 'react';
import { Text, View, Image, TextInput, StyleSheet } from 'react-native';
import { Container, Header, Left, Body, Right, Content, Card } from 'native-base';

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
    };
  }

  render() {
    return (
      <Container>

        <Header>
          <Left>
            <Text onPress={() => this.props.navigation.goBack()}> Close </Text>
          </Left>
          <Body><Text style={styles.bodyText}>Edit My Profile</Text></Body>
          <Right>
            <Text style={styles.rightText}>Done</Text>
          </Right>
        </Header>

        <Content>

          <Card>
            <View style={styles.changeImageView1}>
              <View style={styles.changeImageView2}>
                <Image
                  source={require('../../../img/FORIS_Aviation.jpg')}
                  style={styles.changeImage}
                />
                <Text
                  style={styles.changeImageText}
                >
                  Chenge My Picture
                </Text>
              </View>
            </View>
          </Card>

          <Card style={styles.cardDistance}>
            <View style={styles.cardView}>
              <View style={styles.cardContent}>
                <Text style={styles.eachText}>Name: </Text>
                <View style={{ paddingLeft: 48 }}>
                  <TextInput style={styles.eachTextInput}
                             onChangeText={(name) => this.setState({name})}
                             value={this.state.name}
                             />
                </View>
              </View>
            </View>
          </Card>

          <Card style={styles.cardDistance}>
            <View style={styles.cardView}>
              <View style={styles.cardContent}>
                <Text style={styles.eachText}>Username: </Text>
                <View style={{ paddingLeft: 20 }}>
                  <TextInput style={styles.eachTextInput}
                             onChangeText={(username) => this.setState({username})}
                             value={this.state.username}
                             />
                </View>
              </View>
            </View>
          </Card>

          <Card style={styles.cardDistance}>
            <View style={styles.cardView}>
              <View style={styles.cardContent}>
                <Text style={styles.eachText}>Password: </Text>
                <View style={{ paddingLeft: 21 }}>
                  <TextInput style={styles.eachTextInput}
                             onChangeText={(password) => this.setState({password})}
                             value={this.state.password}
                             />
                </View>
              </View>
            </View>
          </Card>

          <Card style={styles.cardDistance}>
            <View style={styles.cardView}>
              <View style={styles.cardContent}>
                <Text style={styles.eachText}>School: </Text>
                <View style={{ paddingLeft: 37 }}>
                  <TextInput style={styles.eachTextInput}
                             onChangeText={(school) => this.setState({school})}
                             value={this.state.school}
                             />
                </View>
              </View>
            </View>
          </Card>

          <Card style={styles.cardDistance}>
            <View style={styles.cardView}>
              <View style={styles.cardContent}>
                <Text style={styles.eachText}>Major: </Text>
                <View style={{ paddingLeft: 45 }}>
                  <TextInput style={styles.eachTextInput}
                             onChangeText={(major) => this.setState({major})}
                             value={this.state.major}
                             />
                </View>
              </View>
            </View>
          </Card>

          <Card style={styles.cardDistance}>
            <View style={styles.cardView}>
              <View style={styles.cardContent}>
                <Text style={styles.eachText}>Birthday: </Text>
                <View style={{ paddingLeft: 27 }}>
                  <TextInput style={styles.eachTextInput}
                             onChangeText={(birthday) => this.setState({ birthday })}
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

const styles = StyleSheet.create({
  bodyText: {
    fontWeight: '300',
    fontSize: 20
  },

  rightText: {
    color: '#00ccff'
  },

  changeImageView1: {
    flex: 1,
  },

  changeImageView2: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 5
  },

  changeImage: {
    height: 75,
    width: 75,
    borderRadius: 37.5
  },

  changeImageText: {
    color: '#00ccff',
    paddingTop: 10,
    paddingBottom: 5
  },

  cardDistance: {
    height: 40,
  },

  cardContent: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: 20
  },

  cardView: {
    flex: 1,
  },

  eachText: {
    fontWeight: '400',
  },

  eachTextInput: {
    borderBottomWidth: 1,
    borderColor: '#00ccff'
  },
})

export default EditProfile;
