import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { store } from "../../store/store";
import turtle from "../../static/images/turtle.png";

const Turtle = ({ id }) => {
  const globalState = useContext(store);
  const activeSection = globalState.state.activeSection;
  const [isActiveSection, setActiveSection] = useState(false);

  useEffect(() => {
    setActiveSection(activeSection === id);
  }, [activeSection, id]);

  return (
    <div className={`Turtle ${isActiveSection ? `active` : ``}`}>
      <div className="Turtle__wrap">
        <img src={turtle} className="Turtle__img" alt="turtle" />
      </div>
    </div>
  );
};

Turtle.defaultProps = {
  id: "",
};

Turtle.propTypes = {
  id: PropTypes.string,
};

export default Turtle;
