import React from "react";
import Clouds from "../../components/Clouds/Clouds";
import Plane from "../../components/Plane/Plane";

const Section3Background = () => {
  return (
    <div className="Section3__background">
      <Clouds anchor="left" />
      <Clouds anchor="right" />
      <Plane />
    </div>
  );
};

export default Section3Background;
