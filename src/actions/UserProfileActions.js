import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  USER_PROFILE_UPDATE,
  USER_PASSWORD_CREATE_FAIL,
  USER_PASSWORD_CREATE_SUCCESS,
  USER_EMAIL_CHANGED,
  USER_PASSWORD_CHANGED
} from './types.js';
import Router from '../Router';

const isValidPassword = (password) => (password.length > 6);

export const userEmailChanged = (text) => {
  return {
    type: USER_EMAIL_CHANGED,
    payload: text
  };
};

export const userPasswordChanged = (text) => {
  return {
    type: USER_PASSWORD_CHANGED,
    payload: text
  };
};

export const userPasswordCreate = ({ password }) => {
  return (dispatch) => {
    isValidPassword(password)
      .then(() => {
        dispatch({ type: USER_PASSWORD_CREATE_SUCCESS, payload: password });
        Actions.signUp2();
      })
      .catch(() => dispatch({ type: USER_PASSWORD_CREATE_FAIL }));
    };
};

export const userProfileUpdate = ({ prop, value }) => {
  return {
    type: USER_PROFILE_UPDATE,
    payload: { prop, value }
  };
};

export const userProfileCreate = ({ email, password, username }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/profile`)
      .push({ email, password, username });
  };
};
