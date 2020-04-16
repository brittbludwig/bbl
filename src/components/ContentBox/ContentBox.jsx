import React from "react";
import Interweave from "interweave";

const ContentBox = ({ content }) => {
  let template = [];
  content.forEach((item, index) => {
    const block =
      index === 0
        ? `<h2>${item}</h2>`
        : `<p className="ContentBox__text">${item}</p>`;
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
