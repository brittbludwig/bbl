import React, { useContext, useEffect } from "react";
import { store } from "../../store/store";
import { stateActions } from "../../static/labels/labels";

const Field = ({ section }) => {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  const activeField = section;

  const handleChange = (value) => {
    if (globalState.state.formFields.hasOwnProperty(activeField)) {
      const newFieldSet = {
        ...globalState.state.formFields,
        [activeField]: value,
      };
      dispatch({ type: "UPDATE_FIELDS", formFields: newFieldSet });
    }
  };

  return (
    <div className="Field">
      <input type="text" onChange={(e) => handleChange(e.target.value)}></input>
    </div>
  );
};

export default Field;
