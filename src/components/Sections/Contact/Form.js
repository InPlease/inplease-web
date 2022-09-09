// Dependencies
import { Formik, Field, Form } from 'formik';

const ContactForm = ({ translation }) => (
  <div className="form__parent">
    <Formik
      initialValues={{
        firstName: '',
        email: '',
        numberPhone: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form className="form">
        <div className="form__formulary">
          <label htmlFor="firstName">{translation.name}</label>
          <Field id="firstName" name="firstName" placeholder="Jhon Doe" />

          <label htmlFor="lastName">{translation.email}</label>
          <Field
            id="email"
            name="email"
            placeholder="jhondoe@company.com"
            type="email"
          />

          <label htmlFor="email">{translation.phone}</label>
          <Field
            id="number-phone"
            name="numberPhone"
            placeholder="(00) 555-555-555"
            type="number"
          />
        </div>
        <div className="form__submit">
          <button type="submit">
            <p>{translation.submit}</p>
          </button>
        </div>
      </Form>
    </Formik>
  </div>
);
export default ContactForm;
