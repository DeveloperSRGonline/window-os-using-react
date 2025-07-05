export const openApp = (app) => {
  return (dispatch, getState) => {
    const openApps = getState().apps;
    const isAlreadyOpen = openApps.some((a) => a.id === app.id);

    if (!isAlreadyOpen) {
      dispatch({
        type: "OPEN_APP",
        payload: app,
      });
    }
  };
};




export const setTheme = (theme) => ({
  type: "SET_THEME",
  payload: theme,
});

export const closeStart = () => ({
  type: "CLOSE_START",
});


export const focusApp = (id) => ({
  type: "FOCUS_APP",
  payload: id,
});



// Ye ek function hai jo Redux ko batata hai:
// 👉 "OPEN_APP" type ka action bhejo, aur id us app ka bhejo jo open karni hai.

// Redux me isse kahte hain: action creator
// (Ye batata hai kya karna hai)

export const openStart = () => { // ye function hai jo redux jo action bhejta hai
  return {
    type: "TOGGLE_START",// Ye ek action type hai jo -  "Start menu open/close" toggle karega
  };
};


// 📦 Redux me har action ka type hota hai — jaise ek command ya signal.


export const closeApp = (id) => ({
  type: "CLOSE_APP",
  payload: id,
});

export const minimizeApp = (id) => ({
  type: "MINIMIZE_APP",
  payload: id,
});

export const restoreApp = (id) => ({
  type: "RESTORE_APP",
  payload: id,
});

