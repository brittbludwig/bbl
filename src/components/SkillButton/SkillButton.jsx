import React, { useState, useContext } from "react";
import { store } from "../../store/store";

const SkillButton = ({ category, name }) => {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  const activeSection = globalState.state.activeSection;
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    const newFieldSet = {
      ...globalState.state.formFields,
      [activeSection]: [name, ...globalState.state.formFields[activeSection]],
    };
    dispatch({ type: "UPDATE_FIELDS", formFields: newFieldSet });
    setSelected(true);
  };

  return (
    <button
      className={`SkillButton ${selected ? "SkillButton--selected" : ""}`}
      onClick={() => handleClick()}
    >
      {name}
    </button>
  );
};

export default SkillButton;
