import {
  USER_PROFILE_UPDATE,
  USER_PASSWORD_CREATE_FAIL,
  USER_PASSWORD_CREATE_SUCCESS,
  USER_EMAIL_CHANGED,
  USER_PASSWORD_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case USER_PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case USER_PASSWORD_CREATE_FAIL:
      return {
        ...state,
        error: 'Password must have more than 8 characters',
        password: ''
      };
    case USER_PASSWORD_CREATE_SUCCESS:
      return { ...state, password: action.payload };
    case USER_PROFILE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
