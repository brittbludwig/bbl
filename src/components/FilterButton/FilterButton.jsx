import React, { useContext } from "react";
import PropTypes from "prop-types";
import { store } from "../../store/store";
import Button from "../../components/Button/Button";

const FilterButton = ({ category }) => {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  const activeSection = globalState.state.activeSection;

  const handleClick = () => {
    //   const newFieldSet = {
    //     ...globalState.state.formFields,
    //     [activeSection]: [name, ...globalState.state.formFields[activeSection]],
    //   };
    //   dispatch({ type: "UPDATE_FIELDS", formFields: newFieldSet });
  };

  return (
    <Button theme="transparent" label={category} handleClick={handleClick} />
  );
};

FilterButton.defaultProps = {
  category: "",
};

FilterButton.propTypes = {
  category: PropTypes.string,
};

export default FilterButton;
