const initialState = {
  hasReceivedData: false,
  submittingNew: false,
  errorMessage: "",
  data: {},
  status: {},
};

export default (state, action) => {
  let newState;
  switch (action.type) {
    case "ARTICLES_RECEIVE_DATA":
      return {
        ...state,
        hasReceivedData: true,
        data: action.data,
        errorMessage: "",
      };
    case "ARTICLES_RECEIVE_DATA_ERROR":
      return {
        ...state,
        data: null,
        errorMessage: action.message,
      };
    case "ARTICLE_AWAIT_CREATION_RESPONSE":
      return {
        ...state,
        submittingNew: true,
      };
    case "ARTICLE_RECEIVE_CREATION_RESPONSE":
      return {
        ...state,
        submittingNew: false,
      };
    case "ARTICLE_EDIT":
      newState = { ...state };
      newState.status[action.qid] = "ARTICLE_EDITING";
      return newState;
    case "ARTICLE_EDIT_FINISH":
      newState = { ...state };
      delete newState.status[action.qid];
      return newState;
    case "ARTICLE_EDIT_SUBMIT":
      newState = { ...state };
      newState.status[action.qid] = "ARTICLE_SUBMITTING";
      return newState;
    default:
      return state || initialState;
  }
};
