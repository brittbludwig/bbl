import React, { useState, useEffect } from "react";
import SkillButton from "../../components/SkillButton/SkillButton";

const SkillBox = ({ header, skills }) => {
  const [skillButtons, setSkillButtons] = useState([]);
  const isRendered = skillButtons.length < 0;

  useEffect(() => {
    if (isRendered < 0) return;
    let template = [];

    for (let i = skills.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [skills[i], skills[j]] = [skills[j], skills[i]];
    }

    skills.forEach((item, i) => {
      template.push(
        <SkillButton
          key={i}
          category={item.type}
          name={item.name}
        ></SkillButton>
      );
    });

    setSkillButtons(template);
  }, [skills, isRendered]);

  return (
    <div className="SkillBox">
      <h2>{header}</h2>
      {skillButtons}
    </div>
  );
};

export default SkillBox;
