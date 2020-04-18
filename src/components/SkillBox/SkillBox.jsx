import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { store } from "../../store/store";
import SkillButton from "../../components/SkillButton/SkillButton";

const SkillBox = ({ header, skills }) => {
  const globalState = useContext(store);
  const [skillButtons, setSkillButtons] = useState([]);
  const [filteredList, setFilterList] = useState([]);
  const filter = globalState.state.skillsToFilter;

  let list = [];
  skills.forEach((skill) => {
    if (!filter.includes(skill.type)) {
      list.push(skill);
    }
  });

  if (list.length !== filteredList.length) {
    setFilterList(list);
  }

  useEffect(() => {
    let template = [];
    filteredList.forEach((item, i) => {
      template.push(<SkillButton key={i} name={item.name}></SkillButton>);
    });

    setSkillButtons(template);
  }, [filter, filteredList, skills]);

  return (
    <div className="SkillBox">
      <h2>{header}</h2>
      {skillButtons}
    </div>
  );
};

SkillBox.defaultProps = {
  header: "",
  skills: [],
};

SkillBox.propTypes = {
  header: PropTypes.string,
  skills: PropTypes.array,
};

export default SkillBox;
