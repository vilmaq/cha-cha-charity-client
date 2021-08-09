const reducer = (state, action) => {
  if (action.type === "LOGIN") {
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
