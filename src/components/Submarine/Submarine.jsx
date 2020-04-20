import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { store } from "../../store/store";
import submarine from "../../static/images/submarine.png";

const Submarine = ({ id }) => {
  const globalState = useContext(store);
  const activeSection = globalState.state.activeSection;
  const [isActiveSection, setActiveSection] = useState(false);

  useEffect(() => {
    setActiveSection(activeSection === id);
  }, [activeSection, id]);

  return (
    <div className={`Submarine ${isActiveSection ? `active` : ``}`}>
      <img src={submarine} className="Submarine__img" alt="submarine" />
    </div>
  );
};

Submarine.defaultProps = {
  id: "",
};

Submarine.propTypes = {
  id: PropTypes.string,
};

export default Submarine;
