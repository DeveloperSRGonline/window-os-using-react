const initialState = {
  open: false,
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_START":
      return {
        ...state,
        open: !state.open,
      };
    default:
      return state;
  }
};

export default menuReducer;
