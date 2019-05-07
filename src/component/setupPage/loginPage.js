import React, { Component } from 'react';
import { Text, View, AppRegistry, StyleSheet, Button, TextInput } from 'react-native';

// これちょっとテキストいらんところも入れてしまってる、後からMargin考えるのめんどくさくて
// そのまま放置してしまってる。

export default class loginPage extends Component{
  constructor(props){
    super(props)

    this.state = {
      username: '',
      password: '',
    }
  }

  _handlePress() {
     console.log(this.state.username);
     console.log(this.state.password);
  }

  render(){
    return(
      <View>
        <Text style={styles.title1}>
          LOGIN
        </Text>
        <View style={{margin: 20}}>
          <Text style={styles.text1}>
          </Text>
        </View>
        <View style={{margin: 20}}>
          <Text style={styles.text2}>
          </Text>
        </View>
        <View>
          <Text style={styles.text3}>
            Username:
          </Text>
        </View>
        <View>
          <Text style={styles.text4}>
            Password:
          </Text>
        </View>
        <TextInput
          style={styles.textInput1}
          placeholder="Type your Username here"
          returnKeyLabel = {"next"}
          onChangeText={(text) => this.setState({username: text})}/>
        <TextInput
          style={styles.textInput2}
          placeholder="Type your Password here"
          returnKeyLabel = {"next"}
          onChangeText={(text) => this.setState({password: text})}/>
        <View style={{top: 380}}>
        <Button onPress={this._onPressButton} title="START" color='blue'/>
        </View>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  title1: {
    fontSize: 40,
    textAlign: 'center',
    top: 150,
  },
  text1: {
    fontSize: 20,
    margin: 20,
    top: 0,
  },
  text2: {
    fontSize: 20,
    margin: 20,
    top: 0,
  },
  text3: {
    fontSize: 20,
    color: 'gray',
    marginLeft: 60,
    top: 240,
  },
  text4: {
    fontSize: 20,
    color: 'gray',
    marginLeft: 60,
    top: 290,
  },
  textInput1: {
    marginLeft: 60,
    marginRight: 60,
    top: 230,
    borderBottomWidth: 0.5,
  },
  textInput2: {
    marginLeft: 60,
    marginRight: 60,
    top: 280,
    borderBottomWidth: 0.5,
  }
})

//AppRegistry.registerComponent('project1', () => loginPage);
