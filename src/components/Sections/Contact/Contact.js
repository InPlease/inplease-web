// Dependecies
import React from 'react';

// Components
import ContactForm from './Form';

const Contact = ({ translation }) => {
  const { title, formulary } = translation;
  console.log();
  return (
    <section className="contact">
      <div className="contact__title">
        <h1>
          {title['1']} <span>{title['2']}</span>
          {title['3']} <span>{title['4']}</span>
        </h1>
      </div>
      <div className="contact__form">
        <ContactForm translation={formulary} />
      </div>
    </section>
  );
};

export default Contact;
