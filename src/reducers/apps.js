import { apps as allApps } from "../utils/apps";
import { getNextZIndex } from "../utils/zIndexManager"; // ✅ import added

// Pehle se koi app open nahi hai
const initialState = [];

const appsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_APP": {
      const appId = action.payload;

      // Agar app already open hai
      const isAlreadyOpen = state.find((app) => app.id === appId);
      if (isAlreadyOpen) {
        return state.map((app) =>
          app.id === appId
            ? {
                ...app,
                minimized: false,
                zIndex: getNextZIndex(), // ✅ zIndex update on re-focus
              }
            : app
        );
      }

      // Naya app open karo
      const appData = allApps.find((a) => a.id === appId);
      if (!appData) return state;

      return [
        ...state,
        {
          ...appData,
          minimized: false,
          zIndex: getNextZIndex(), // ✅ zIndex for new app
        },
      ];
    }

    case "CLOSE_APP": {
      const appId = action.payload;
      return state.filter((app) => app.id !== appId);
    }

    case "MINIMIZE_APP": {
      const appId = action.payload;
      return state.map((app) =>
        app.id === appId ? { ...app, minimized: true } : app
      );
    }

    case "RESTORE_APP": {
      const appId = action.payload;
      return state.map((app) =>
        app.id === appId ? { ...app, minimized: false } : app
      );
    }

    case "FOCUS_APP": {
      const appId = action.payload;
      return state.map((app) =>
        app.id === appId
          ? { ...app, zIndex: getNextZIndex() } // ✅ Only zIndex change
          : app
      );
    }

    default:
      return state;
  }
};

export default appsReducer;
