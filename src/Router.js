import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

// Other imports
import NewsNavBar from './NewsNavBar';
import CustomNavBar from './CustomNavBar';

// Imports for each scene used
import FrontPage from './components/setupPage/FrontPage';
import SignIn from './components/setupPage/SignIn';
import SignUp2 from './components/setupPage/SignUp2';
import ChangeUsername from './components/setupPage/ChangeUsername';
import CreateUserName from './components/setupPage/CreateUserName';
import SignUp1 from './components/setupPage/SignUp1';
import UseOfTerms from './components/setupPage/UseOfTerms';
import Main from './components/main/info/Main';
import UniversityPage from './components/main/university/UniversityPage';
import KansasStateUniversity from './components/main/university/KansasStateUniversity';
import AuthLoading from './components/setupPage/AuthLoading';
import Apply from './components/main/Apply/MainApply';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="authLoading" component={AuthLoading} hideNavBar initial />
        <Scene key="setupPage" hideNavBar>
          <Scene key="frontPage" component={FrontPage} hideNavBar initial />
          <Scene key="signIn" component={SignIn} navTransparent={1} />
          <Scene key="signUp2" component={SignUp2} />
          <Scene key="changeUsername" component={ChangeUsername} />
          <Scene key="createUserName" component={CreateUserName} />
          <Scene key="signUp1" component={SignUp1} />
          <Scene key="useOfTerms" component={UseOfTerms} />
        </Scene>
        <Scene key="main" hideNavBar>
          <Scene key="tabBar" tabs tabBarStyle={{ backgroundColor: '#FFFFFF' }} hideNavBar>
            <Scene key="Info" component={Main} navBar={NewsNavBar} />
            <Scene key="University" component={UniversityPage} hideNavBar initial />
            <Scene key="Apply" component={Apply} hideNavBar />
            <Scene key="Kansas" component={KansasStateUniversity} hideNavBar />
          </Scene>
          <Scene key='kansasStateUniversity' component={KansasStateUniversity} />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
