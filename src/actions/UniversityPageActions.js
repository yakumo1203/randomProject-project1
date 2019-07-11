import {
  UNIVERSITY_PAGE_REDIRECT,
  UNIVERSITY_PAGE_REDIRECT_SUCCESS,
  UNIVERSITY_PAGE_REDIRECT_FAIL,
  UNIVERSITY_PAGE_CLICKED
} from './types';

const fetch = require('node-fetch');

export const pageClicked = ({ university_id, uid }) => (dispatch) => {
  dispatch({ type: UNIVERSITY_PAGE_REDIRECT });
  fetch(`universities/university_page/home/${university_id}/${uid}`)
    .then((res) => {
      if (res.status !== 200) {
        console.log(`Error at university page redirect... Status code: ${res.status}`);
        return;
      }
      res.json().then((data) => {
        universityPageRedirectSuccess(dispatch, university_id, uid, data));
      }
    })
    .catch((err) => universityPageRedirectFail(dispatch, err));
};

const universityPageRedirectSuccess = (dispatch, university_id, uid, data) => {
  dispatch({
    type: UNIVERSITY_PAGE_REDIRECT_SUCCESS,
    payload: data
  });
  // create UniversityPageDetails.js and navigation route as well
  this.props.navigation.navigate('UniversityPageDetails', {
    university_id,
    uid
  });
};

const universityPageRedirectFail = (dispatch) => {
  dispatch({ type: UNIVERSITY_PAGE_REDIRECT_FAIL });
};
