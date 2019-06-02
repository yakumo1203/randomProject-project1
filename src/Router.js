import React from 'react';
import { Router, Scene, Text } from 'react-native-router-flux';
import FrontPage from './components/setupPage/FrontPage';
import SignIn from './components/setupPage/SignIn';
import SignUp2 from './components/setupPage/SignUp2';
import ChangeUsername from './components/setupPage/ChangeUsername';
import CreateUserName from './components/setupPage/CreateUserName';
import SignUp1 from './components/setupPage/SignUp1';
import UseOfTerms from './components/setupPage/UseOfTerms';
import Main from './components/main/info/Main';
import universityFront from './components/main/university/MainUniversity';
// import KansasStateUniversity from './components/main/university/KansasStateUniversity';


const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="setupPage">
          <Scene key="frontPage" component={FrontPage} hideNavBar initial />
          <Scene key="signIn" component={SignIn} navTransparent={1} />
          <Scene key="signUp2" component={SignUp2} />
          <Scene key="changeUsername" component={ChangeUsername} />
          <Scene key="createUserName" component={CreateUserName} />
          <Scene key="signUp1" component={SignUp1} />
          <Scene key="useOfTerms" component={UseOfTerms} />
        </Scene>
        <Scene key="main" tabs tabBarStyle={{ backgroundColor: '#FFFFFF' }}>
          <Scene key="Info" component={Main} hideNavBar initial />
          <Scene key="University" component={universityFront} hideNavBar />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
