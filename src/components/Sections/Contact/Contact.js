// Dependecies
import React from 'react';

const Contact = ({ translation }) => {
  const { title } = translation;
  console.log();
  return (
    <section className="contact">
      <div>
        <h1>
          {title['1']} <span>{title['2']}</span>
          {title['3']} <span>{title['4']}</span>
        </h1>
      </div>
    </section>
  );
};

export default Contact;
