import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer,
  DrawerNavigator,
  createDrawerNavigator,
} from 'react-navigation';

import React from 'react';

import { Dimensions } from 'react-native';

import { Icon } from 'react-native-elements';


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

//main/home
import HomeMain from './components/main/home/HomeMain';

// main/info
import InfoMain from './components/main/info/InfoMain';

// main/university
import UniversityPage from './components/main/university/UniversityPage';
import KansasStateUniversity from './components/main/university/KansasStateUniversity';

// main/apply
import ApplyMain from './components/main/apply/ApplyMain';
import BusinessManner from './components/main/apply/BusinessManner';

// main/account
import MainAccount from './components/main/account/MainAccount';
import SettingScreen from './components/main/account/SettingScreen';
import MenuDrawer from './components/main/account/MenuDrawer';
import EditProfile from './components/main/account/EditProfile';

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
// ---Home
const HomeNavigator = createStackNavigator({
  HomeMain: {
    screen: HomeMain,
    navigationOptions: {
      header: null,
    }
  }
});

const HomeFlow = createStackNavigator({
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        header: null,
      }
    }
  },
  { initialRouteName: 'Home' }
);


// ---Info
const InfoNavigator = createStackNavigator({
  InfoMain: {
    screen: InfoMain
   }
});

const InfoFlow = createStackNavigator(
  {
    Info: {
      screen: InfoNavigator,
      navigationOptions: {
        header: null,
      }
    }
  },
  { initialRouteName: 'Info' }
);

// ---University
const UniversityNavigator = createStackNavigator({
  UniversityPage: { screen: UniversityPage },
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

//delete later
const KansasStateUniversityNavigator = createStackNavigator({
  KansasStateUniversity: { screen: KansasStateUniversity },
});

const KansasStateUniversityFlow = createStackNavigator(
  {
    KansasStateUniversity: {
      screen: KansasStateUniversityNavigator,
      navigationOptions: {
        header: null
      }
    }
  },
  { initialRouterName: 'KansasStateUniversity' }
);
// until here delete

// ---apply
const ApplyNavigator = createStackNavigator({
    ApplyMain: {
      screen: ApplyMain,
      navigationOptions: {
        header: null
      }
    },
    BusinessManner: {
      screen: BusinessManner,
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
  { initialRouteName: 'Apply' }
);

// ---account
const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
  drawerWidth: WIDTH * 0.83,
  contentComponent: ({ navigation }) => {
    return (<MenuDrawer navigation={navigation} />)
  }
};

const AccountNavigator = createDrawerNavigator({
  Account: {
    screen: MainAccount,
    navigationOptions: {
      header: null,
    }
  },
  Setting: {
    screen: SettingScreen,
    navigationOptions: {
      header: null,
    },
  },
  EditProfile: {
    screen: EditProfile,
    // navigationOptions: {
    //   header: null
    // }
  }
},
DrawerConfig,
);

const AccountFlow = createStackNavigator({
    Account: {
      screen: AccountNavigator,
      navigationOptions: {
        header: null,
      }
    }
  },
  { initialRouteName: 'Account' }
);

const BottomTabNavigator = createBottomTabNavigator(
  {
    Home: HomeFlow,
    Info: InfoFlow,
    University: UniversityFlow,
    Kansas: KansasStateUniversityFlow, //delete this sentence later
    Apply: ApplyFlow,
    Account: AccountFlow,
  },
  { initialRouteName: 'Home' }
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
