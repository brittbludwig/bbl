import React from "react";
import Interweave from "interweave";
import Field from "../Field/Field";

const FieldBox = ({ fieldText, section }) => {
  return (
    <div className="FieldBox">
      <div className="FieldBox__text">
        <Interweave content={fieldText}></Interweave>
      </div>
      <div className="FieldBox__field">
        <Field section={section} />
      </div>
    </div>
  );
};

export default FieldBox;
