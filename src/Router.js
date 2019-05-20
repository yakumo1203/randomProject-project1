import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import FrontPage from './components/setupPage/FrontPage';
import SignIn from './components/setupPage/SignIn';
import SignUp1 from './components/setupPage/SignUp1';
import PlaceHolder from './components/main/PlaceHolder';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="setupPage">
          <Scene key="frontPage" component={FrontPage} hideNavBar initial />
          <Scene key="signIn" component={SignIn} hideNavBar />
          <Scene key="signUp1" component={SignUp1} hideNavBar />
        </Scene>
        <Scene key="main">
          <Scene key="placeHolder" component={PlaceHolder} hideNavBar initial />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
