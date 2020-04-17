import React from "react";
import content from "../../static/content/content";
import Navigation from "../../components/Navigation/Navigation";
import Section1 from "../../sections/Section1/Section1";
import Section2 from "../../sections/Section2/Section2";

const Main = () => {
  return (
    <div className="Main">
      <Navigation />
      <Section1
        sectionHeader={content[0].header}
        sectionContent={content[0].content}
        sectionId={content[0].id}
        fieldContent={content[0].formText}
      />
      <Section2
        sectionHeader={content[1].header}
        sectionContent={content[1].resume}
        sectionId={content[1].id}
        fieldContent={content[1].formText}
      />
    </div>
  );
};

export default Main;
