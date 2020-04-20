import React from "react";
import PropTypes from "prop-types";

const Field = ({ handleChange, id }) => {
  return (
    <div className="Field">
      <input
        type="text"
        onChange={(e) => handleChange(e.target.value, id)}
      ></input>
    </div>
  );
};

Field.defaultProps = {
  handleChange: () => {},
  id: "",
};

Field.propTypes = {
  handleChange: PropTypes.func,
  id: PropTypes.string,
};

export default Field;
