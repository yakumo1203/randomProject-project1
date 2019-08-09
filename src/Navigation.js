import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer,
  DrawerNavigator,
  createDrawerNavigator,
  createMaterialTopTabNavigator,
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
import CreateNewPost from './components/main/home/CreateNewPost';
import CreateNewQuestion from './components/main/home/CreateNewQuestion';
import MenuDrawerHome from './components/main/home/MenuDrawerHome';

// main/info
import InfoMain from './components/main/info/InfoMain';
import SUArticles from './components/main/info/eachArticles/SeattleUniversityArticles';

// main/university
import UniversityPage from './components/main/university/UniversityPage';
import MenuDrawerUniversity from './components/main/university/MenuDrawerUniversity';
import MyLists from './components/main/university/MyLists';
import KansasStateUniversity from './components/main/university/universityLists/KansasStateUniversity';

// main/apply
import ApplyMain from './components/main/apply/ApplyMain';
import BusinessManner from './components/main/apply/SeminorList/BusinessManner';

// main/account
import Account from './components/main/account/AccountMain';
//import MainAccount from './components/main/account/MainAccount';
import SettingScreen from './components/main/account/SettingScreen';
import MenuDrawer from './components/main/account/MenuDrawer';
import EditProfile from './components/main/account/EditProfile';
import Follows from './components/main/account/Follows';
import Followers from './components/main/account/Followers';
import NotificationSetting from './components/main/account/NotificationSetting';

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
const WIDTH = Dimensions.get('window').width;

const DrawerConfigHome = {
  drawerWidth: WIDTH * 0.83,
  contentComponent: ({ navigation }) => {
    return (<MenuDrawerHome navigation={navigation} />)
  }
};

const HomeNavigator = createDrawerNavigator({
  HomeMain: {
    screen: HomeMain,
    navigationOptions: {
      header: null,
    }
  },
  CreateNewPost: {
    screen: CreateNewPost,
    navigationOptions: {
      header: null,
    }
  },
  CreateNewQuestion: {
    screen: CreateNewQuestion,
    navigationOptions: {
      header: null,
    }
  },
},
DrawerConfigHome,
);

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
    screen: InfoMain,
    navigationOptions: {
      header: null,
    }
  },
  SUArticles: {
    screen: SUArticles,
    navigationOptions: {
      header: null,
    }
  },
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
const DrawerConfigUniversity = {
  drawerWidth: WIDTH * 0.83,
  contentComponent: ({ navigation }) => {
    return (<MenuDrawerUniversity navigation={navigation} />)
  }
};

const UniversityNavigator = createDrawerNavigator({
  UniversityPage: {
    screen: UniversityPage,
    navigationOptions: {
      header: null,
    }
   },
},
DrawerConfigUniversity,
);

const UniversityFlow = createStackNavigator(
  {
    University: {
      screen: UniversityNavigator,
      navigationOptions: {
        header: null
      }
    },
    MyLists: {
      screen: MyLists,
      navigationOptions: {
        header: null,
      }
    },
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
const DrawerConfigAccount = {
  drawerWidth: WIDTH * 0.83,
  contentComponent: ({ navigation }) => {
    return (<MenuDrawer navigation={navigation} />)
  }
};

const AccountNavigator = createDrawerNavigator({
  Account: {
    screen: Account,
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
  },
  Follows: {
    screen: Follows,
    navigationOptions: {
      header: null,
    },
  },
  Followers: {
    screen: Followers,
    navigationOptions: {
      header: null,
    },
  },
  NotificationSetting: {
    screen: NotificationSetting,
  },
},
DrawerConfigAccount,
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
    Home: {
      screen: HomeFlow,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) =>
        (<Icon name='home' color='#00ccff' />)
      }
    },
    Search: {
      screen: InfoFlow,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) =>
        (<Icon name='search' color='#00ccff' />)
      }
    },
    University: {
      screen: UniversityFlow,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) =>
        (<Icon name='school' color='#00ccff' />)
      }
    },
    Kansas: KansasStateUniversityFlow,
    Apply: {
      screen: ApplyFlow,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) =>
        (<Icon name='bookmark' color='#00ccff' />)
      }
    },
    Account: {
      screen: AccountFlow,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) =>
        (<Icon name='person' color='#00ccff' />)
      }
    },
  },

  {
    order: ['Home', 'Search', 'University', 'Kansas', 'Apply', 'Account'],
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#D4AF37',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: 'white',
      }
    },
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
