import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { store } from "../../store/store";
import { sendFormData } from "../../services/services";
import { contactForm, sections } from "../../static/labels/labels";
import Button from "../Button/Button";
import ContactPrepop from "./ContactPrepop";
import ContactForm from "./ContactForm";

const Contact = ({ header, content }) => {
  const globalState = useContext(store);
  const [showBlankTemplate, setBlankTemplate] = useState(false);
  const [showFormModal, setFormModal] = useState(false);

  const sendEmail = () => {
    const formFields = globalState.state.formFields;
    const emailTemplate = globalState.state.emailTemplate;
    const madlibFormContent = document.getElementById("prepopForm").textContent;

    const formData = showBlankTemplate
      ? {
          name: emailTemplate.name,
          email: emailTemplate.email,
          message: emailTemplate.message,
        }
      : {
          name: formFields[sections.section1],
          email: formFields[sections.section7],
          message: madlibFormContent,
        };

    sendFormData(formData)
      .then((res) => {
        setFormModal(true);
      })
      .catch(() => {
        console.log("Message not sent");
      });
  };

  const closeModal = () => {
    setFormModal(false);
  };

  const toggleBlankForm = () => {
    setBlankTemplate(!showBlankTemplate);
  };

  return (
    <div className="Contact">
      <div
        className={`flex-column justify-content-center Contact__thank-you ${
          showFormModal ? "d-flex" : "d-none"
        }`}
      >
        <div className="Contact__message pb-5">{contactForm.thanks}</div>
        <Button
          label={contactForm.close}
          theme="dark"
          handleClick={closeModal}
        />
      </div>
      <h2>{header}</h2>
      {showBlankTemplate ? (
        <ContactForm />
      ) : (
        <div id="prepopForm">
          <ContactPrepop content={content} />
        </div>
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
