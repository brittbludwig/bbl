import React from "react";
import Stars from "../../components/Stars/Stars";
import Rocket from "../../components/Rocket/Rocket";

const Section2Background = ({ id }) => {
  return (
    <div className="Section2__background">
      <Stars position="secondary" />
      <Rocket id={id} />
    </div>
  );
};

export default Section2Background;
