import { combineReducers } from "redux";
import settingReducer from "./setting";
// baaki reducers import karo

const rootReducer = combineReducers({
  setting: settingReducer,
  // baaki reducers
});

export default rootReducer;
