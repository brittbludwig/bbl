import React, { useContext, useState, useEffect } from "react";
import { store } from "../../store/store";
import { sections } from "../../static/labels/labels";
import plane from "../../static/images/plane.png";

const Plane = () => {
  const globalState = useContext(store);
  const [isActiveSection, setActiveSection] = useState(false);

  useEffect(() => {
    globalState.state.activeSection === sections.section3
      ? setActiveSection(true)
      : setActiveSection(false);
  }, [globalState.state.activeSection]);

  return (
    <div className={`Plane ${isActiveSection ? `active` : ``}`}>
      <img src={plane} className="Plane__img" alt="plane" />
    </div>
  );
};

export default Plane;
