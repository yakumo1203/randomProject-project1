import {
  USER_PROFILE_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
  username: '',
  schoool: '',
  major: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_PROFILE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value }
    default:
      return state;
  }
};
