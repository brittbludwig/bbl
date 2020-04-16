import React from "react";
import Interweave from "interweave";

const ContentBox = ({ header, content }) => {
  const headerTemplate = `<h2>${header}</h2>`;

  let template = [];
  template.push(headerTemplate);
  content.forEach((item) => {
    let block;
    if (typeof item === "string") {
      block = item;
    }
    if (typeof item === "object") {
      block = `<span className='ContentBox__company'>${item.place}</span> - ${item.date}`;
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
