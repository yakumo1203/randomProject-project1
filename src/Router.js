import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { FrontPage, SignIn, SignUp1 } from './components/setupPage';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="frontPage" component={FrontPage} hideNavBar />
        <Scene key="signIn" component={SignIn} hideNavBar />
        <Scene kry="signUp1" component={SignUp1} hideNavBar />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
