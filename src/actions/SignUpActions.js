import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  SIGNUP_USERNAME_CHANGED,
  SIGNUP_EMAIL_CHANGED,
  SIGNUP_PASSWORD_CHANGED,
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAIL
} from './types';
import Router from '../Router';

const actionCodeSettings = { handleCodeInApp: true };

const isValidSignUpInfo = (email, password) => {
  /* check if username and email are unique */
  console.log(password);
  if (password.length >= 8) {
    return true;
  }
    return false;
};

export const signupUsernameChanged = (text) => {
  return {
    type: SIGNUP_USERNAME_CHANGED,
    payload: text
  };
};

export const signupEmailChanged = (text) => {
  return {
    type: SIGNUP_EMAIL_CHANGED,
    payload: text
  };
};

export const signupPasswordChanged = (text) => {
  return {
    type: SIGNUP_PASSWORD_CHANGED,
    payload: text
  };
};

export const signupUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: SIGNUP_USER });
    console.log(`${email}, ${password}`);

    if (isValidSignUpInfo(email, password)) {
      firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
        .then(() => {
          firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => signupUserSuccess(dispatch, user))
            .catch((error) => signupUserFail(dispatch, error));
      });
    } else {
      const error = 'Invalid password and email... for now, invalid password length';
      signupUserFail(dispatch, error);
    }
  };
};

const signupUserSuccess = (dispatch, user) => {
  dispatch({
    type: SIGNUP_USER_SUCCESS,
    payload: user
  });

  Actions.home();
};

const signupUserFail = (dispatch, error) => {
  console.log(error);
  dispatch({ type: SIGNUP_USER_FAIL });
};
