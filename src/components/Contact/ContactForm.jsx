import React, { useContext } from "react";
import { store } from "../../store/store";
import { contactForm } from "../../static/labels/labels";
import Field from "../Field/Field";

const ContactForm = () => {
  const globalState = useContext(store);
  const { dispatch } = globalState;

  const handleChange = (value, id) => {
    if (globalState.state.emailTemplate) {
      const newFieldSet = {
        ...globalState.state.emailTemplate,
        [id]: value,
      };
      dispatch({ type: "UPDATE_EMAIL", emailTemplate: newFieldSet });
    }
  };

  console.log("global state", globalState);
  return (
    <div className="Contact__blank">
      <div className="Contact__block">
        <label htmlFor={contactForm.name}>{contactForm.name}</label>
        <Field handleChange={handleChange} id={"name"} />
      </div>
      <div className="Contact__block">
        <label htmlFor={contactForm.email}>{contactForm.email}</label>
        <Field handleChange={handleChange} id={"email"} />
      </div>
      <div className="Contact__block">
        <label htmlFor={contactForm.message}>{contactForm.message}</label>
        <textarea
          className="Contact__textarea"
          onChange={(e) => handleChange(e.target.value, "message")}
          id={"message"}
        />
      </div>
    </div>
  );
};

export default ContactForm;
