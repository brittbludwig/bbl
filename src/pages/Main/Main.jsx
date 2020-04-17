import React, { useEffect, useContext } from "react";
import content from "../../static/content/content";
import { store } from "../../store/store";
import Navigation from "../../components/Navigation/Navigation";
import Section1 from "../../sections/Section1/Section1";
import Section2 from "../../sections/Section2/Section2";

const Main = () => {
  const globalState = useContext(store);
  const { dispatch } = globalState;

  useEffect(() => {
    const onScroll = (e) => {
      let visibleSection = "";
      const sections = Object.values(content);

      sections.forEach((item) => {
        let currentSection = document.getElementById(`${item.id}`);
        if (currentSection) {
          let sectionCoords = currentSection.getBoundingClientRect();

          if (sectionCoords.top >= -200 && sectionCoords.top <= 200) {
            visibleSection = item.id;
          }
        }
      });

      if (visibleSection !== "") {
        dispatch({ type: "ACTIVE_SECTION", activeSection: visibleSection });
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
