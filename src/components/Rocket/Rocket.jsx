import React, { useContext, useState, useEffect } from "react";
import { store } from "../../store/store";
import { sections } from "../../static/labels/labels";
import rocket from "../../static/images/rocket.png";

const Rocket = () => {
  const globalState = useContext(store);
  const activeSection = globalState.state.activeSection;
  const [isActiveSection, setActiveSection] = useState(true);

  useEffect(() => {
    if (activeSection === sections.section2) {
      setActiveSection(true);
    } else {
      setActiveSection(false);
    }
  }, [activeSection]);

  return (
    <div className={`Rocket ${isActiveSection ? "active" : ""}`}>
      <img src={rocket} className="Rocket__img" alt="rocket" />
    </div>
  );
};

export default Rocket;
