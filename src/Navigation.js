import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer
 } from 'react-navigation';

// Importing all screens used in navigation
// setupPage
import AuthLoading from './components/setupPage/AuthLoading';
import FrontPage from './components/setupPage/FrontPage';
import SignUp1 from './components/setupPage/SignUp1';
import SignUp2 from './components/setupPage/SignUp2';
import SignIn from './components/setupPage/SignIn';
import UseOfTerms from './components/setupPage/UseOfTerms';
import CreateUserName from './components/setupPage/CreateUserName';
import ChangeUserName from './components/setupPage/ChangeUserName';

// main/info
import InfoMain from './components/main/info/InfoMain';

// main/university
import UniversityPage from './components/main/university/UniversityPage';

// main/apply
import ApplyMain from './components/main/apply/ApplyMain';


// AuthFlow
const AuthLoadingNavigator = createStackNavigator(
  {
    AuthLoading: { screen: AuthLoading }
  },
  { initialRouteName: 'AuthLoading' }
);

const SetupPageNavigator = createStackNavigator(
  {
    FrontPage: { screen: FrontPage },
    SignIn: { screen: SignIn },
    SignUp1: { screen: SignUp1 },
    SignUp2: { screen: SignUp2 },
    UseOfTerms: { screen: UseOfTerms },
    CreateUserName: { screen: CreateUserName },
    ChangeUserName: { screen: ChangeUserName },
  },
  {
    initialRouteName: 'FrontPage',
  }
);

const AuthFlow = createSwitchNavigator(
  {
    AuthLoading: {
      screen: AuthLoadingNavigator,
      navigationOptions: {
        header: null
      }
    },
    SetupPage: {
      screen: SetupPageNavigator,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

// Main
// ---Info
const InfoNavigator = createStackNavigator({
  InfoMain: { screen: InfoMain }
});

const InfoFlow = createStackNavigator(
  {
    Info: {
      screen: InfoNavigator,
      navigationOptions: {
        header: null
      }
    }
  },
  { initialRouterName: 'Info' }
);

// ---University
const UniversityNavigator = createStackNavigator({
  UniversityPage: { screen: UniversityPage }
});

const UniversityFlow = createStackNavigator(
  {
    University: {
      screen: UniversityNavigator,
      navigationOptions: {
        header: null
      }
    }
  },
  { initialRouterName: 'University' }
);

// ---apply
const ApplyNavigator = createStackNavigator({
    ApplyMain: {
      screen: ApplyMain,
      navigationOptions: {
        header: null
      }
    }
});

const ApplyFlow = createStackNavigator(
  {
    Apply: {
      screen: ApplyNavigator,
      navigationOptions: {
        header: null
      }
    }
  },
  { initialRouterName: 'Apply' }
);

const BottomTabNavigator = createBottomTabNavigator(
  {
    Info: InfoFlow,
    University: UniversityFlow,
    Apply: ApplyFlow
  },
  { initialRouteName: 'Info' }
);

const AppNavigator = createSwitchNavigator(
  {
    Auth: AuthFlow,
    App: BottomTabNavigator
  },
  {
    initialRouteName: 'Auth',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
