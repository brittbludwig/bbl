import React from "react";
import Interweave from "interweave";
import Field from "../Field/Field";

const FieldBox = ({ fieldText, section }) => {
  return (
    <div className="FieldBox">
      <Interweave content={fieldText}></Interweave>
      <div className="FieldBox__field">
        <Field section={section} />
      </div>
    </div>
  );
};

export default FieldBox;
