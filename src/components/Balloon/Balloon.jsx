import React, { useContext, useState, useEffect } from "react";
import { store } from "../../store/store";
import balloon from "../../static/images/balloon.png";

const Balloon = ({ id }) => {
  const globalState = useContext(store);
  const activeSection = globalState.state.activeSection;
  const [isActiveSection, setActiveSection] = useState(true);

  useEffect(() => {
    setActiveSection(activeSection === id);
  }, [activeSection, id]);

  return (
    <div className={`Balloon ${isActiveSection ? "active" : ""}`}>
      <img src={balloon} className="Balloon__img" alt="balloon" />
    </div>
  );
};

export default Balloon;
