import React, { useState } from "react";
import PropTypes from "prop-types";

const Button = ({ label, theme, handleClick }) => {
  const [selected, setSelected] = useState(false);

  const buttonClick = () => {
    setSelected(!selected);
    handleClick();
  };

  return (
    <button
      className={`Button Button__${theme} ${
        selected ? `Button__${theme}--selected` : ""
      }`}
      onClick={() => buttonClick()}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  label: "",
  theme: "",
  handleClick: () => {},
};

Button.propTypes = {
  label: PropTypes.string,
  theme: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
