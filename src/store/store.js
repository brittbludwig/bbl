import React, { createContext, useReducer } from "react";

export const initialState = {
  activeSection: "section1",
  starDensity: 30,
  formFields: {
    section1: "",
    section2: "",
    section3: [],
    section4: "",
    section5: "",
    section6: "",
    section7: "",
  },
  skillsToFilter: [],
  emailTemplate: {
    name: "",
    email: "",
    message: "",
  },
};

const ACTIVE_SECTION = "ACTIVE_SECTION";
const FILTER_SKILLS = "FILTER_SKILLS";
const UPDATE_FIELDS = "UPDATE_FIELDS";
const UPDATE_EMAIL = "UPDATE_EMAIL";

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case ACTIVE_SECTION:
        return {
          activeSection: action.activeSection,
          starDensity: state.starDensity,
          formFields: state.formFields,
          skillsToFilter: state.skillsToFilter,
          emailTemplate: state.emailTemplate,
        };
      case FILTER_SKILLS:
        return {
          activeSection: state.activeSection,
          starDensity: state.starDensity,
          formFields: state.formFields,
          skillsToFilter: action.skillsToFilter,
          emailTemplate: state.emailTemplate,
        };
      case UPDATE_FIELDS:
        return {
          activeSection: state.activeSection,
          starDensity: state.starDensity,
          formFields: action.formFields,
          skillsToFilter: state.skillsToFilter,
          emailTemplate: state.emailTemplate,
        };
      case UPDATE_EMAIL:
        return {
          activeSection: state.activeSection,
          starDensity: state.starDensity,
          formFields: state.formFields,
          skillsToFilter: state.skillsToFilter,
          emailTemplate: action.emailTemplate,
        };
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
