import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import FrontPage from './components/setupPage/FrontPage';
import SignIn from './components/setupPage/SignIn';
import SignUp2 from './components/setupPage/SignUp2';
import PlaceHolder from './components/main/PlaceHolder';
import ChangeUsername from './components/setupPage/ChangeUsername';
import CreateUserName from './components/setupPage/CreateUserName';
import SignUp1 from './components/setupPage/SignUp1';
import UseOfTerms from './components/setupPage/UseOfTerms';
import Main from './components/main/info/Main';

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
        <Scene key="main">
          <Scene key="main" component={Main} title='FORIS' initial />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
