import React from "react";
import PropTypes from "prop-types";

const Button = ({ label, theme, handleClick, isSelected }) => {
  const buttonClick = () => {
    handleClick();
  };

  return (
    <button
      className={`Button Button__${theme} ${
        isSelected ? `Button__${theme}--selected` : ""
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
  isSelected: false,
};

Button.propTypes = {
  label: PropTypes.string,
  theme: PropTypes.string,
  handleClick: PropTypes.func,
  isSelected: PropTypes.bool,
};

export default Button;
