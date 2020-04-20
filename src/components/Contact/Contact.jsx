import React, { useState } from "react";
import PropTypes from "prop-types";
import { contactForm } from "../../static/labels/labels";

import Button from "../Button/Button";
import ContactPrepop from "./ContactPrepop";
import ContactForm from "./ContactForm";

const Contact = ({ header, content }) => {
  const [showBlankTemplate, setBlankTemplate] = useState(false);

  const sendEmail = () => {};

  const toggleBlankForm = () => {
    setBlankTemplate(!showBlankTemplate);
  };

  return (
    <div className="Contact">
      <h2>{header}</h2>
      {showBlankTemplate ? (
        <ContactForm />
      ) : (
        <ContactPrepop content={content} />
      )}
      <div className="Contact__buttons d-flex flex-column flex-md-row justify-content-between px-0">
        <Button
          label={contactForm.send}
          theme="light"
          handleClick={sendEmail}
        />
        <Button
          label={showBlankTemplate ? contactForm.cancel : contactForm.write}
          theme="light"
          handleClick={toggleBlankForm}
        />
      </div>
    </div>
  );
};

Contact.defaultProps = {
  header: "",
  content: [],
};

Contact.propTypes = {
  header: PropTypes.string,
  content: PropTypes.array,
};

export default Contact;
