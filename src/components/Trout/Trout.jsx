import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { store } from "../../store/store";
import trout from "../../static/images/trout.png";

const Trout = ({ id }) => {
  const globalState = useContext(store);
  const activeSection = globalState.state.activeSection;
  const [isActiveSection, setActiveSection] = useState(false);

  useEffect(() => {
    setActiveSection(activeSection === id);
  }, [activeSection, id]);

  return (
    <div className={`Trout ${isActiveSection ? `active` : ``}`}>
      <div className="Trout__wrap">
        <img src={trout} className="Trout__img" alt="trout" />
      </div>
    </div>
  );
};

Trout.defaultProps = {
  id: "",
};

Trout.propTypes = {
  id: PropTypes.string,
};

export default Trout;
