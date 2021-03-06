import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ImageBackground,
  Image,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight
} from 'react-native';
import { SignInSection, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../../actions';

class SignIn extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner />;
    }

    return (
      <SignInSection
        text='Sign in'
        onPress={this.onButtonPress.bind(this)}
        signInStyle={{ top: 220 }}
      />
    );
  }

  renderError() {
    if (this.props.error) {
      return (
        <View>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  render() {
    const { title1, text2, textInputContainer, inputs, inputIcon } = styles;

    return (
      <ImageBackground
        source={require('../../img/ImageForis1.jpg')}
        style={{ width: '100%', height: '100%' }}
      >
        <View>
          <Text style={title1}>Sign in</Text>
          <Text style={text2}>Enter your Email and password.</Text>

          <View style={textInputContainer}>
            <Image
              style={inputIcon}
              source={{ uri: 'https://img.icons8.com/color/48/000000/secured-letter.png' }}
            />
            <TextInput
              style={inputs}
              placeholder='Email'
              returnKeyLabel={'next'}
              value={this.props.email}
              onChangeText={this.onEmailChange.bind(this)}
            />
          </View>

          <View style={textInputContainer}>
            <Image
              style={inputIcon}
              source={{ uri: 'https://img.icons8.com/color/48/000000/lock-2.png' }}
            />
            <TextInput
              style={inputs}
              placeholder="password"
              secureTextEntry
              underlineColorAndroid='transparent'
              value={this.props.password}
              onChangeText={this.onPasswordChange.bind(this)}
            />
          </View>

          {this.renderError()}

          <View>
            {this.renderButton()}
          </View>

          <TouchableHighlight
            style={{ top: 280, alignItems: 'center' }}
            onPress={() => this.props.navigation.navigate('SignUp1')}
          >
            <Text style={{ color: 'black' }} >Don't have an accout?</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  title1: {
    fontSize: 50,
    textAlign: 'center',
    top: 160,
    color: 'white',
  },
  text2: {
    fontSize: 18,
    textAlign: 'center',
    top: 180,
    color: 'white',
  },
  textInputContainer: {
    borderBottomColor: 'white',
    backgroundColor: 'white',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    top: 220,
    marginLeft: 60,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: 'white',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center'
  },
  errorTextStyle: {
    alignSelf: 'center',
    color: 'red'
  }
});

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
};

export default connect(
  mapStateToProps,
  { emailChanged, passwordChanged, loginUser }
)(SignIn);
