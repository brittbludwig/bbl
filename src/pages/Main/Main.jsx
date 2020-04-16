import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import Section1 from "../../sections/Section1/Section1";
import Section2 from "../../sections/Section2/Section2";

const Main = () => {
  return (
    <div className="Main">
      <Navigation />
      <Section1 />
      <Section2 />
    </div>
  );
};

export default Main;
