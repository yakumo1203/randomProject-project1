import firebase from 'firebase';
import React, { Component } from 'react';
// import { SignIn } from './components/setupPage';
import Router from './Router';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDEa_fJ0yMQdcCp8pYWQ1GCTWj18eNfEvA',
      authDomain: 'foris-prototype1.firebaseapp.com',
      databaseURL: 'https://foris-prototype1.firebaseio.com',
      projectId: 'foris-prototype1',
      storageBucket: 'foris-prototype1.appspot.com',
      messagingSenderId: '1056280071440',
      appId: '1:1056280071440:web:feac2b8ef587719b'
    });
  }

  render() {
    return (
      <Router />
    );
  }
}

export default App;
