import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { store } from "../../store/store";
import sign from "../../static/images/sign.png";

const Sign = ({ id }) => {
  const globalState = useContext(store);
  const activeSection = globalState.state.activeSection;
  const [isActiveSection, setActiveSection] = useState(false);

  useEffect(() => {
    setActiveSection(activeSection === id);
  }, [activeSection, id]);

  return (
    <div className={`Sign ${isActiveSection ? `active` : ``}`}>
      <img src={sign} className="Sign__img" alt="sign" />
    </div>
  );
};

Sign.defaultProps = {
  id: "",
};

Sign.propTypes = {
  id: PropTypes.string,
};

export default Sign;
