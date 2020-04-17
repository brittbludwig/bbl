import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { skillCategories } from "../../static/labels/labels";
import FilterButton from "../../components/FilterButton/FilterButton";

const Filter = ({ header, skills }) => {
  const [filterOptions, setFilterOptions] = useState([]);
  const isRendered = filterOptions.length < 0;

  useEffect(() => {
    if (isRendered < 0) return;
    let template = [];

    let filterCategories = [];
    skills.forEach((item, i) => {
      if (filterCategories.indexOf(item.type) === -1) {
        filterCategories.push(item.type);
        template.push(
          <FilterButton
            key={i}
            category={skillCategories[item.type]}
          ></FilterButton>
        );
      }
    });

    setFilterOptions(template);
  }, [skills, isRendered]);

  return (
    <div className="Filter">
      <h2>{header}</h2>
      {filterOptions}
    </div>
  );
};

Filter.defaultProps = {
  header: "",
  skills: [],
};

Filter.propTypes = {
  header: PropTypes.string,
  skills: PropTypes.arrayOf({}),
};

export default Filter;
