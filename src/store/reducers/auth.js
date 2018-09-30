const initialState = {
  username: null,
  uid: null,
  photoURL: null,
  status: "AUTH_ANONYMOUS",
};

export default (state, action) => {
  switch (action.type) {
    case "AUTH_OPEN":
      return {
        status: "AUTH_AWAITING_RESPONSE",
        username: "guest",
        photoURL: null,
        uid: null,
      };
    case "AUTH_LOGIN":
      return {
        status: "AUTH_LOGGED_IN",
        username: action.payload.username,
        photoURL: action.payload.photoURL,
        uid: action.payload.uid,
      };
    case "AUTH_LOGOUT":
      return {
        status: "AUTH_ANONYMOUS",
        username: "guest",
        photoURL: null,
        uid: null,
      };
    default:
      return state || initialState;
  }
};
