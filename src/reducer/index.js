const reducer = (state, action) => {
  if (action.type === "LOGIN" || action.type === "SIGNUP") {
    return {
      ...state,
      user: action.payload,
    };
  }

  if (action.type === "LOGOUT") {
    return {
      ...state,
      user: null,
    };
  }

  return state;
};

export default reducer;
