import React from "react";
import Stars from "../../components/Stars/Stars";
import Rocket from "../../components/Rocket/Rocket";

const Section2Background = () => {
  return (
    <div className="Section2__background">
      <Stars position="secondary" />
      <Rocket />
    </div>
  );
};

export default Section2Background;
