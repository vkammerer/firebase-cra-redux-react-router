import * as firebase from "firebase";
import { auth, database } from "../firebase/firebaseApp";

export const listenToAuth = () => (dispatch, getState) => {
  auth.onAuthStateChanged(authData => {
    if (authData) {
      const userData = {
        uid: authData.uid,
        photoURL: authData.photoURL,
        username: authData.providerData[0].displayName,
      };
      dispatch({ type: "AUTH_LOGIN", payload: userData });
      database.ref(`players/${authData.uid}`).set(userData, error => {
        if (error) {
          dispatch({
            type: "FEEDBACK_DISPLAY_ERROR",
            error: `User submission failed! ${error}`,
          });
        }
      });
    } else {
      if (getState().auth.status !== "AUTH_ANONYMOUS") {
        dispatch({ type: "AUTH_LOGOUT" });
      }
    }
  });
};

export const openAuth = () => dispatch => {
  dispatch({ type: "AUTH_OPEN" });
  const provider = new firebase.auth.FacebookAuthProvider();
  auth.signInWithPopup(provider).catch(error => {
    dispatch({
      type: "FEEDBACK_DISPLAY_ERROR",
      error: `Login failed! ${error}`,
    });
    dispatch({ type: "AUTH_LOGOUT" });
  });
};

export const logoutUser = () => dispatch => {
  dispatch({ type: "AUTH_LOGOUT" });
  auth.signOut();
};
