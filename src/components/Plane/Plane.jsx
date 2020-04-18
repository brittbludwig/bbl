import React, { useContext, useState, useEffect } from "react";
import { store } from "../../store/store";
import { sections } from "../../static/labels/labels";
import plane from "../../static/images/plane.png";

const Plane = () => {
  const globalState = useContext(store);
  const activeSection = globalState.state.activeSection;
  const [isActiveSection, setActiveSection] = useState(false);

  useEffect(() => {
    setActiveSection(activeSection === sections.section3);
  }, [activeSection]);

  return (
    <div className={`Plane ${isActiveSection ? `active` : ``}`}>
      <img src={plane} className="Plane__img" alt="plane" />
    </div>
  );
};

export default Plane;
