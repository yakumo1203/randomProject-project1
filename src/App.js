import firebase from 'firebase';
import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Root } from 'native-base';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import AppContainer from './Navigation';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyDEa_fJ0yMQdcCp8pYWQ1GCTWj18eNfEvA',
      authDomain: 'foris-prototype1.firebaseapp.com',
      databaseURL: 'https://foris-prototype1.firebaseio.com',
      projectId: 'foris-prototype1',
      storageBucket: 'foris-prototype1.appspot.com',
      messagingSenderId: '1056280071440',
      appId: '1:1056280071440:web:feac2b8ef587719b'
    };
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Root>
          <AppContainer />
        </Root>
      </Provider>
    );
  }
}

export default App;
