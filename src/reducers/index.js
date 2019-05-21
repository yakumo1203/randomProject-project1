import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import UserProfileReducer from './UserProfileReducer';

export default combineReducers({
  auth: AuthReducer,
  userProfile: UserProfileReducer
});
