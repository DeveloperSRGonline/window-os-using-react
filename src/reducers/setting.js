const initialState = {
  theme: "dark", // 🔆 default theme
};

const settingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_THEME":
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

export default settingReducer;
