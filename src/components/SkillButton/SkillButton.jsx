import React, { useState, useContext } from "react";
import { store } from "../../store/store";

const SkillButton = ({ category, name }) => {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  const [clicked, setSelection] = useState(false);

  const handleClick = (value) => {
    console.log("hit");
    // const newFieldSet = {
    //   ...globalState.state.formFields,
    //   [activeField]: value,
    // };
    // dispatch({ type: 'UPDATE_FIELDS', formFields: newFieldSet });
    // setSelection(true);
  };

  return (
    <button
      className={`SkillButton ${clicked ? "SkillButton--selected" : ""}`}
      onClick={() => handleClick()}
    >
      {name}
    </button>
  );
};

export default SkillButton;
