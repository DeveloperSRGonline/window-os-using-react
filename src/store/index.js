import { configureStore } from "@reduxjs/toolkit";

import menuReducer from "../reducers/menu";
import settingReducer from "../reducers/setting";
import appsReducer from "../reducers/apps";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    setting: settingReducer,
    apps: appsReducer,
  },
  // ✅ No need to manually add thunk
});
