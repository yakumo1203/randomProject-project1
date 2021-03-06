import firebase from 'firebase';
import {
  SIGNUP_USERNAME_CHANGED,
  SIGNUP_EMAIL_CHANGED,
  SIGNUP_PASSWORD_CHANGED,
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAIL
} from './types';

// const actionCodeSettings = {
//   url: 'https://www.foris.com/?email=' + firebase.auth().currentUser.email,
//   handleCodeInApp: true,
//   iOS: {
//     bundleId: 'com.foris.project1'
//   },
//   android: {
//     bundleId: 'com.foris.project1',
//     installApp: true,
//     minimumVersion: '12'
//   },
//   dynamicLinkDomain: 'foris.page.link/foris'
// };

const isValidSignUpInfo = (email, password) => {
  /* check if username and email are unique */
  console.log(password);
  if (password.length >= 8) {
    return true;
  }
    return false;
};

export const signupUsernameChanged = (text) => ({
    type: SIGNUP_USERNAME_CHANGED,
    payload: text
  });

export const signupEmailChanged = (text) => ({
    type: SIGNUP_EMAIL_CHANGED,
    payload: text
  });

export const signupPasswordChanged = (text) => ({
    type: SIGNUP_PASSWORD_CHANGED,
    payload: text
  });

// export const signupUser = ({ email, password }) => {
//   return (dispatch) => {
//     dispatch({ type: SIGNUP_USER });
//     console.log(`${email}, ${password}`);
//
//     if (isValidSignUpInfo(email, password)) {
//       firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
//         .then(() => {
//           firebase.auth().createUserWithEmailAndPassword(email, password)
//             .then((user) => signupUserSuccess(dispatch, user))
//             .catch((error) => signupUserFail(dispatch, error));
//       });
//     } else {
//       const error = 'Invalid password and email... for now, invalid password length';
//       signupUserFail(dispatch, error);
//     }
//   };
// };

export const signupUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: SIGNUP_USER });
    console.log(`${email}, ${password}`);

    if (isValidSignUpInfo(email, password)) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((user) => signupUserSuccess(dispatch, user))
          .catch((error) => signupUserFail(dispatch, error));
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
  this.props.navigation.navigate('HomeMain');
};

const signupUserFail = (dispatch, error) => {
  console.log(error);
  dispatch({ type: SIGNUP_USER_FAIL });
};
