import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { store } from "../../store/store";
import { sendFormData } from "../../utilities/services/services";
import { contactForm, sections } from "../../static/labels/labels";
import Button from "../Button/Button";
import ContactPrepop from "./ContactPrepop";
import ContactForm from "./ContactForm";

const Contact = ({ header, content }) => {
  const globalState = useContext(store);
  const [showBlankTemplate, setBlankTemplate] = useState(false);

  const sendEmail = () => {
    const formFields = globalState.state.formFields;
    const emailTemplate = globalState.state.emailTemplate;

    const formData = showBlankTemplate
      ? {
          name: emailTemplate.name,
          email: emailTemplate.email,
          message: emailTemplate.message,
        }
      : {
          name: formFields[sections.section1],
          email: formFields[sections.section7],
          message: formFields[sections.section3],
        };

    sendFormData(formData)
      .then((res) => {
        console.log(res);
      })
      .catch(() => {
        console.log("Message not sent");
      });
  };

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
