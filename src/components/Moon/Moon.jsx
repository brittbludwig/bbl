import React, { useContext, useState, useEffect } from "react";
import { store } from "../../store/store";
import { sections } from "../../static/labels/labels";
import moon from "../../static/images/moon.png";

const Moon = () => {
  const globalState = useContext(store);
  const [isActiveSection, setActiveSection] = useState(false);

  useEffect(() => {
    globalState.state.activeSection === sections.section1
      ? setActiveSection(true)
      : setActiveSection(false);
  }, [globalState.state.activeSection]);

  return (
    <div className="Moon">
      <img
        src={moon}
        className={`Moon__img ${isActiveSection ? `active` : ``}`}
        alt="moon"
      />
    </div>
  );
};

export default Moon;
