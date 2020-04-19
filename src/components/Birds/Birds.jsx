import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { store } from "../../store/store";
import birds from "../../static/images/birds.png";

const Birds = ({ id }) => {
  const globalState = useContext(store);
  const activeSection = globalState.state.activeSection;
  const [isActiveSection, setActiveSection] = useState(false);

  useEffect(() => {
    setActiveSection(activeSection === id);
  }, [activeSection, id]);

  return (
    <div className={`Birds ${isActiveSection ? `active` : ``}`}>
      <div className="Birds__wrap">
        <img src={birds} className="Birds__img" alt="birds" />
      </div>
    </div>
  );
};

Birds.defaultProps = {
  id: "",
};

Birds.propTypes = {
  id: PropTypes.string,
};

export default Birds;
