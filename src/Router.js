import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

// Other imports
import NewsNavBar from './NavBars';

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
        <Scene key="main" hideNavBar>
          <Scene key="tabBar"tabs tabBarStyle={{ backgroundColor: '#FFFFFF' }} >
            <Scene key="Info" component={Main} hideNavBar navBar={NewsNavBar} />
            <Scene key="University" component={UniversityPage} hideNavBar initial />
          </Scene>
          <Scene key='kansasStateUniversity' component={KansasStateUniversity} />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
