import React, { createContext, useReducer } from "react";

export const initialState = {
  activeSection: "section2",
  starDensity: 30,
  formFields: {
    section1: "",
    section2: "",
    section3: "",
    section4: "",
    section5: "",
    section6: "",
    section7: "",
  },
};

const UPDATE_FIELDS = "UPDATE_FIELDS";

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case UPDATE_FIELDS:
        return {
          activeSection: state.activeSection,
          starDensity: state.starDensity,
          formFields: action.formFields,
        };
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
