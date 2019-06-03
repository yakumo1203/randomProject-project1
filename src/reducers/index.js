import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import SignUpReducer from './SignUpReducer';
import PersistentAuthReducer from './PersistentAuthReducer';

export default combineReducers({
  auth: AuthReducer,
  signUp: SignUpReducer,
  token: PersistentAuthReducer
});
