import React from 'react';
import { View, AppRegistry } from 'react-native';
import App from './src/App';

<<<<<<< HEAD
export default class NameAndPassword extends Component{
  render(){
    return(
      <View>
        <Text style={styles.title1}>
          NAME AND PASSWORD
        </Text>

        <TextInput
          style={styles.textInput}
          placeholder="Full Name"
          returnKeyLabel = {"next"}
          onChangeText={(text) => this.setState({fullname: text})}/>

        <TextInput
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry={true}
          returnKeyLabel = {"next"}
          onChangeText={(text) => this.setState({username: text})}/>

        <Text style={styles.text1}>
          Passwords must include at least 6 characters
        </Text>

        <Text style={styles.text2}>
          Save Password
        </Text>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('next')}>
          <Text style={styles.loginText}>Continue and Sync Contacts</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.registerPage} onPress={() => this.onClickListener('username')}>
          <Text style={styles.button1}> Continue without Syncning Contacts</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles=StyleSheet.create({
  title1: {
    fontSize: 20,
    top: 200,
    textAlign: 'center',
    color: 'black',
  },

  textInput: {
    top: 300,
    marginLeft: 60,
    marginRight: 60,
    marginBottom: 40,
    borderBottomWidth: 1,
  },

  text1: {
    fontSize: 10,
    top: 270,
    color: 'red',
    marginLeft: 60,
    fontFamily: 'Avenir',
  },

  text2: {
    fontSize: 10,
    top: 280,
    color: '#C9C9C9',
    marginLeft: 100,
  },

  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    top: 400,
    marginLeft: 60,
  },

  loginButton: {
    backgroundColor: '#00CCFF',
  },

  loginText: {
    color: 'white',
  },

  registerPage: {
    top: 400,
    alignItems: 'center',
  },

  button1: {
    color: '#00CCFF',
  },
})
AppRegistry.registerComponent('project1', () => NameAndPassword );
=======
AppRegistry.registerComponent('project1', () => App );
>>>>>>> 0df1de6aad07d4b0cb102c13a9206cadb5ed9be8
