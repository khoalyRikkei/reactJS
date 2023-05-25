export const count = (state = 0, action) => {
  console.log(action.type, state);
  switch (action.type) {
    case "UP":
      state = state + 1;
      console.log("++", state);
      return state;
    case "DOWN":
      return (state = state - 1);
    default:
      return state;
  }
};
