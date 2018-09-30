const initialState = [];

export default (state, action) => {
  switch (action.type) {
    case "FEEDBACK_DISMISS":
      return state.filter((i, n) => n !== action.num);
    case "FEEDBACK_DISPLAY_ERROR":
      return [...state, { msg: action.error, error: true }];
    case "FEEDBACK_DISPLAY_MESSAGE":
      return [...state, { msg: action.message, error: false }];
    default:
      return state || initialState;
  }
};
