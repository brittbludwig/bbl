import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { store } from "../../store/store";
import fish from "../../static/images/fish.png";

const Fish = ({ id }) => {
  const globalState = useContext(store);
  const activeSection = globalState.state.activeSection;
  const [isActiveSection, setActiveSection] = useState(false);

  useEffect(() => {
    setActiveSection(activeSection === id);
  }, [activeSection, id]);

  return (
    <div className={`Fish ${isActiveSection ? `active` : ``}`}>
      <div className="Fish__wrap">
        <img src={fish} className="Fish__img" alt="fish" />
      </div>
    </div>
  );
};

Fish.defaultProps = {
  id: "",
};

Fish.propTypes = {
  id: PropTypes.string,
};

export default Fish;
