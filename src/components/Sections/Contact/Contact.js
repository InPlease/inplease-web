// Dependecies
import React, { useState } from 'react';

// Components
import ContactForm from './Form';
import FormSuccess from './FormSuccessScreen';

const Contact = ({ translation }) => {
  const [show, setShowSuccess] = useState(false);
  const { title, formulary, successMessage } = translation;
  const showSuccessScreen = () => {
    setShowSuccess(!show);
  };
  return (
    <section className="contact">
      <div className="contact__title">
        <h1>
          {title['1']} <span>{title['2']}</span>
          {title['3']} <span>{title['4']}</span>
        </h1>
      </div>
      <div className="contact__form">
        <ContactForm
          translation={formulary}
          showSuccScreen={showSuccessScreen}
        />
      </div>
      {show && (
        <FormSuccess
          translation={successMessage}
          closeEvent={showSuccessScreen}
        />
      )}
    </section>
  );
};

export default Contact;
