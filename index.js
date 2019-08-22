import { AppRegistry } from 'react-native';
import App from './src/App';
import { Client } from 'bugsnag-react-native';

const bugsnag = new Client("1dba75caa4f664f662d33f55c6bbfbfc");
bugsnag.notify(new Error("Test error"));
AppRegistry.registerComponent('project1', () => App);