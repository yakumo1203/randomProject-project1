import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import FrontPage from './components/setupPage/FrontPage';
import SignIn from './components/setupPage/SignIn';
import SignUp1 from './components/setupPage/SignUp1';
import SignUp2 from './components/setupPage/SignUp2';
import PlaceHolder from './components/main/PlaceHolder';
import ChangeUsername from './components/setupPage/ChangeUsername';
import CreateUserName from './components/setupPage/CreateUserName';
import SchoolAndMajor from './components/setupPage/SchoolAndMajor';
import SignUpNameAndPassword from './components/setupPage/SignUpNameAndPassword';
import UseOfTerms from './components/setupPage/UseOfTerms';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="setupPage">
          <Scene key="frontPage" component={FrontPage} hideNavBar initial />
          <Scene key="signIn" component={SignIn} hideNavBar />
          <Scene key="signUp1" component={SignUp1} hideNavBar />
          <Scene key="signUp2" component={SignUp2} hideNavBar />
          <Scene key="schoolAndMajor" component={SchoolAndMajor} hideNavBar />
          <Scene key="changeUsername" component={ChangeUsername} hideNavBar />
          <Scene key="createUserName" component={CreateUserName} hideNavBar />          
          <Scene key="signUpNameAndPassword" component={SignUpNameAndPassword} hideNavBar />
          <Scene key="useOfTerms" component={UseOfTerms} />
        </Scene>
        <Scene key="main">
          <Scene key="placeHolder" component={PlaceHolder} hideNavBar initial />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
