import React, { useContext } from "react";
import PropTypes from "prop-types";
import { store } from "../../store/store";
import Field from "../Field/Field";

const ContactPrepop = ({ content }) => {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  const fields = globalState.state.formFields;
  const activeSection = globalState.state.activeSection;

  const handleChange = (value) => {
    if (globalState.state.formFields.hasOwnProperty(activeSection)) {
      const newFieldSet = {
        ...globalState.state.formFields,
        [activeSection]: value,
      };
      dispatch({ type: "UPDATE_FIELDS", formFields: newFieldSet });
    }
  };

  let template = [];
  let skills = fields[`section${3}`].join(", ");

  const checkValue = (field) => {
    return field.length > 0 ? field : "________";
  };

  template.push(
    <div className="Contact__block" key={1}>
      {content[0]} {checkValue(fields[`section${1}`])}.
    </div>
  );
  template.push(
    <div className="Contact__block" key={2}>
      {content[1]} {checkValue(fields[`section${2}`])}.
    </div>
  );
  template.push(
    <div className="Contact__block" key={3}>
      {content[2]} {checkValue(skills)} {content[3]} {content[4]}{" "}
      {checkValue(fields[`section${4}`])}
      {". "}
      {content[5]} {checkValue(fields[`section${5}`])} {content[6]}{" "}
      <div className="Contact__field">
        <Field handleChange={handleChange} />
      </div>
    </div>
  );
  template.push(
    <div className="Contact__block" key={4}>
      <div>{checkValue(fields[`section${6}`])},</div>
      {checkValue(fields[`section${1}`])}
    </div>
  );
  return template;
};

ContactPrepop.defaultProps = {
  fields: {},
  content: [],
};

ContactPrepop.propTypes = {
  fields: PropTypes.object,
  content: PropTypes.array,
};

export default ContactPrepop;
