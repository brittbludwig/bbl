import React, { useContext } from "react";
import PropTypes from "prop-types";
import { store } from "../../store/store";

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

Field.defaultProps = {
  section: "",
};

Field.propTypes = {
  section: PropTypes.string,
};

export default Field;
