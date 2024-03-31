let initialState = {
  count: 0,
  id: "",
  password: "",
};

function reducer(state = initialState, action) {
  console.log(action);
  //   if (action.type === "INCREMENT") {
  //     return { ...state, count: state.count + action.payload.num };
  //   }

  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.payload.num };
    case "LOGIN":
      return {
        ...state,
        id: action.payload.id,
        password: action.payload.password,
      };
    case "LOGOUT":
      return {
        ...state,
        id: action.payload.id,
        password: action.payload.password,
      };
    case "DECREMENT":
      return { ...state, count: state.count - action.payload.num };
    default:
      return { ...state };
  }

  //   return { ...state };
}

export default reducer;
