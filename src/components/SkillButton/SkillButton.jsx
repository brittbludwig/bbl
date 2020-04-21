import React, { useContext } from "react";
import PropTypes from "prop-types";
import { store } from "../../store/store";
import Button from "../../components/Button/Button";

const SkillButton = ({ name }) => {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  const activeSection = globalState.state.activeSection;
  const selectedSkills = globalState.state.formFields[activeSection];
  const isSelected = selectedSkills.includes(name);

  const handleClick = () => {
    const newFieldSet = {
      ...globalState.state.formFields,
      [activeSection]: [name, ...globalState.state.formFields[activeSection]],
    };
    dispatch({ type: "UPDATE_FIELDS", formFields: newFieldSet });
  };

  return (
    <Button
      theme="primary"
      label={name}
      handleClick={handleClick}
      isSelected={isSelected}
    />
  );
};

SkillButton.defaultProps = {
  name: "",
};

SkillButton.propTypes = {
  name: PropTypes.string,
};

export default SkillButton;
