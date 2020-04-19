import React, { useContext, useState, useEffect } from "react";
import { store } from "../../store/store";
import brittany from "../../static/images/brittany.png";

const Headshot = ({ id }) => {
  const globalState = useContext(store);
  const activeSection = globalState.state.activeSection;
  const [isActiveSection, setActiveSection] = useState(true);

  useEffect(() => {
    setActiveSection(activeSection === id);
  }, [activeSection, id]);

  return (
    <div className={`Headshot ${isActiveSection ? "active" : ""}`}>
      <img src={brittany} className="Headshot__img" alt="brittany" />
    </div>
  );
};

export default Headshot;
