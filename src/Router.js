import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import FrontPage from './components/setupPage/FrontPage';
import SignIn from './components/setupPage/SignIn';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="frontPage" component={FrontPage} hideNavBar />
        // <Scene key="signIn" component={SignIn} hideNavBar />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
