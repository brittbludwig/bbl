import React, { useContext, useState, useEffect } from "react";
import { store } from "../../store/store";
import { sections } from "../../static/labels/labels";
import cloudLeft from "../../static/images/cloud-left.png";
import cloudRight from "../../static/images/cloud-right.png";

const Clouds = ({ anchor }) => {
  const globalState = useContext(store);
  const [isActiveSection, setActiveSection] = useState(false);
  const cloudImg = anchor === "left" ? cloudLeft : cloudRight;

  useEffect(() => {
    globalState.state.activeSection === sections.section3
      ? setActiveSection(true)
      : setActiveSection(false);
  }, [globalState.state.activeSection]);

  return (
    <div
      className={`Clouds Clouds--${anchor} ${isActiveSection ? `active` : ``}`}
    >
      <img src={cloudImg} className="Clouds__img" alt="cloud" />
    </div>
  );
};

export default Clouds;
