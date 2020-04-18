import React, { useContext } from "react";
import PropTypes from "prop-types";
import { store } from "../../store/store";
import { skillCategories } from "../../static/labels/labels";
import Button from "../../components/Button/Button";

const FilterButton = ({ skill }) => {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  const skillsToFilter = globalState.state.skillsToFilter;

  const handleClick = () => {
    let skillList = skillsToFilter;

    if (skillsToFilter.includes(skill)) {
      skillsToFilter.splice(skillsToFilter.indexOf(skill), 1);
      skillList = skillsToFilter;
    } else {
      skillList.push(skill);
    }

    dispatch({ type: "FILTER_SKILLS", skillsToFilter: skillList });
  };

  return (
    <Button
      theme="transparent"
      label={skillCategories[skill]}
      handleClick={handleClick}
    />
  );
};

FilterButton.defaultProps = {
  skill: "",
};

FilterButton.propTypes = {
  skill: PropTypes.string,
};

export default FilterButton;
