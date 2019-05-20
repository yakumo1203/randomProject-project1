import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
// import { FrontPage, SignIn, SignUp1 } from './components/setupPage';
import FrontPage from './components/setupPage/FrontPage';
import SignIn from './components/setupPage/SignIn';
import SignUp1 from './components/setupPage/SignUp1';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="frontPage" component={FrontPage} hideNavBar />
        <Scene key="signIn" component={SignIn} />
        <Scene key="signUp1" component={SignUp1} hideNavBar />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
