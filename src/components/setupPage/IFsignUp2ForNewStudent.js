import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { CreateAccoutInput } from './common';

// Newstudentから欲しい情報をもっと記入せなあかんから、それを加えていく
// 最終的にはその内容をSignUp3に繋げる。

export default class signUp2 extends Component{
  state = { name: '', email: '', major: '', activity: '' };

  render(){
    return(
      <View>
        <View>
          <Text style={styles.text1}>
            SIGN UP
          </Text>
        </View>
        <View>
          <CreateAccountInput
            label='Name:'
            placeholder='Type your name here'
            onChangeText={name => this.setState({ name })}
            topMargin=280
          />
          <CreateAccountInput
            label='Email:'
            placeholder='Type your email here'
            onChangeText={email => this.setState({ email })}
            topMaring=290
          />
          <CreateAccountInput
            label='School:'
            placeholder='Type your school here'
            onChangeText={school => this.setState({ school })}
            topMargin=300
          />
          <CreateAccountInput
            label='Major:'
            placeholder='Type your major here'
            onChangeText={major => this.setState({ major })}
            topMargin=310
          />
          <CreateAccountInput
            label='Activity:'
            placeholder='Type your activity here'
            onChangeText={activity => this.setState({ activity })}
            topMargin=320
          />
          <View style={{top: 450}}>
            <Button onPress={this._onPressButton} title="Next" color='blue'/>
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  text1: {
    fontSize: 40,
    textAlign: 'center',
    top: 150,
  }
};
