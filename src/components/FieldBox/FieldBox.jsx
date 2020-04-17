import React from "react";
import PropTypes from "prop-types";
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

FieldBox.defaultProps = {
  fieldText: "",
  section: "",
};

FieldBox.propTypes = {
  fieldText: PropTypes.string,
  section: PropTypes.string,
};

export default FieldBox;
