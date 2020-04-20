import React, { useEffect, useContext } from "react";
import content from "../../static/content/content";
import { store } from "../../store/store";
import Navigation from "../../components/Navigation/Navigation";
import Section1 from "../../sections/Section1/Section1";
import Section2 from "../../sections/Section2/Section2";
import Section3 from "../../sections/Section3/Section3";
import Section4 from "../../sections/Section4/Section4";
import Section5 from "../../sections/Section5/Section5";
import Section6 from "../../sections/Section6/Section6";
import Section7 from "../../sections/Section7/Section7";

const Main = () => {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  const activeSection = globalState.state.activeSection;

  console.log("window.location.href", window.location.href);

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
            // window.location.hash = `#${item.id}`;
          }
        }
      });

      if (visibleSection !== "") {
        dispatch({ type: "ACTIVE_SECTION", activeSection: visibleSection });
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [dispatch, activeSection]);

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
        sectionContent={content[1].content}
        sectionId={content[1].id}
        fieldContent={content[1].formText}
      />
      <Section3
        sectionHeader={content[2].header}
        sectionContent={content[2].content}
        sectionId={content[2].id}
        filterHeader={content[2].formText}
      />
      <Section4
        sectionHeader={content[3].header}
        sectionContent={content[3].content}
        sectionId={content[3].id}
        fieldContent={content[3].formText}
      />
      <Section5
        sectionHeader={content[4].header}
        sectionContent={content[4].content}
        sectionId={content[4].id}
        fieldContent={content[4].formText}
      />
      <Section6
        sectionHeader={content[5].header}
        sectionContent={content[5].content}
        sectionId={content[5].id}
        fieldContent={content[5].formText}
      />
      <Section7
        sectionHeader={content[6].header}
        sectionContent={content[6].content}
        sectionId={content[6].id}
        fieldContent={content[6].formText}
      />
    </div>
  );
};

export default Main;
