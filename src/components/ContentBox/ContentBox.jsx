import React, { useEffect } from "react";
import Interweave from "interweave";

const ContentBox = ({ header, content }) => {
  const headerTemplate = `<h2>${header}</h2>`;

  let template = [];
  template.push(headerTemplate);

  content.forEach((item) => {
    let block = "";
    if (typeof item === "string") {
      block = item;
    }
    if (typeof item === "object") {
      Object.values(item).forEach((entry) => {
        block = `${block}<span>${entry}</span>`;
      });
    }
    template.push(block);
  });

  return (
    <div className="ContentBox">
      {template.map((item, index) => {
        return <Interweave key={index} content={item} />;
      })}
    </div>
  );
};

export default ContentBox;
