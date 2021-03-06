import React, { useContext } from "react";
import PropTypes from "prop-types";
import { store } from "../../store/store";
import { sections } from "../../static/labels/labels";
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
  let skills = fields[sections.section3].join(", ") || "";
  let formattedSkills =
    skills.indexOf(",") > 0
      ? skills.slice(0, skills.lastIndexOf(",")) +
        " and" +
        skills.slice(skills.lastIndexOf(",") + 1)
      : skills;

  const checkValue = (field) => {
    return field.length > 0 ? field : "_____________";
  };

  template.push(
    <div className="Contact__block" key={sections.section1}>
      {content[0]} {checkValue(fields[sections.section1])}.
    </div>
  );
  template.push(
    <div className="Contact__block" key={sections.section2}>
      {content[1]} {checkValue(fields[sections.section2])}.
    </div>
  );
  template.push(
    <div className="Contact__block" key={sections.section3}>
      {content[2]} {checkValue(formattedSkills)} {content[3]} {content[4]}{" "}
      {checkValue(fields[sections.section4])}
      {". "}
      {content[5]} {checkValue(fields[sections.section5])} {content[6]}{" "}
      <div className="Contact__field">
        <Field handleChange={handleChange} />
      </div>
    </div>
  );
  template.push(
    <div className="Contact__block" key={sections.section4}>
      <div>{checkValue(fields[sections.section6])},</div>
      {checkValue(fields[sections.section1])}
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
