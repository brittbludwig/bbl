import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { store } from "../../store/store";
import bass from "../../static/images/bass.png";

const Bass = ({ id }) => {
  const globalState = useContext(store);
  const activeSection = globalState.state.activeSection;
  const [isActiveSection, setActiveSection] = useState(false);

  useEffect(() => {
    setActiveSection(activeSection === id);
  }, [activeSection, id]);

  return (
    <div className={`Bass ${isActiveSection ? `active` : ``}`}>
      <div className="Bass__wrap">
        <img src={bass} className="Bass__img" alt="bass" />
      </div>
    </div>
  );
};

Bass.defaultProps = {
  id: "",
};

Bass.propTypes = {
  id: PropTypes.string,
};

export default Bass;
