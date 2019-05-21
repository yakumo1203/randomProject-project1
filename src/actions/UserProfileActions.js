import firebase from 'firebase';
import {
  USER_PROFILE_UPDATE
} from './type.js';
import Router from '../Router';

export const userProfileUpdate = ({ prop, value }) => {
  return {
    type: USER_PROFILE_UPDATE,
    payload: { prop, value }
  }
};

export const userProfileCreate = ({ username, school, major }) => {
  cosnt { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/profile`)
      .push({ username, school, major });
  };
};
