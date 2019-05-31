import {
  SIGNUP_USERNAME_CHANGED,
  SIGNUP_EMAIL_CHANGED,
  SIGNUP_PASSWORD_CHANGED,
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  username: '',
  email: '',
  password: '',
  error: '',
  user: null,
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNUP_USERNAME_CHANGED:
      return { ...state, username: action.payload };
    case SIGNUP_EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case SIGNUP_PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case SIGNUP_USER:
      return { ...state, loading: true, error: '' };
    case SIGNUP_USER_FAIL:
      return { ...state, loading: false, error: 'Email or password is invalid', password: '' };
    case SIGNUP_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    default:
      return state;
  }
};
