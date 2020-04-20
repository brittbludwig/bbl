import React, { useContext } from "react";
import PropTypes from "prop-types";
import Interweave from "interweave";
import { store } from "../../store/store";
import Field from "../Field/Field";

const FieldBox = ({ fieldText, section }) => {
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
    <div className="FieldBox">
      <div className="FieldBox__text">
        <Interweave content={fieldText}></Interweave>
      </div>
      <div className="FieldBox__field">
        <Field handleChange={handleChange} />
      </div>
    </div>
  );
};

FieldBox.defaultProps = {
  fieldText: "",
  section: "",
};

FieldBox.propTypes = {
  fieldText: PropTypes.string,
  section: PropTypes.string,
};

export default FieldBox;
