import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import FilterButton from "../../components/FilterButton/FilterButton";

const Filter = ({ header, skills }) => {
  const [filterOptions, setFilterOptions] = useState([]);

  useEffect(() => {
    let template = [];
    let filterCategories = [];

    skills.forEach((item, i) => {
      if (filterCategories.indexOf(item.type) === -1) {
        filterCategories.push(item.type);
        template.push(<FilterButton key={i} skill={item.type}></FilterButton>);
      }
    });

    setFilterOptions(template);
  }, [skills]);

  return (
    <div className="Filter">
      <div className="Filter__wrap">
        <h2>{header}</h2>
        {filterOptions}
      </div>
    </div>
  );
};

Filter.defaultProps = {
  header: "",
  skills: [],
};

Filter.propTypes = {
  header: PropTypes.string,
  skills: PropTypes.array,
};

export default Filter;
