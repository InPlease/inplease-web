// Dependencies
import disco__icon from '../../../assets/img/icon/disco-icon.svg';

const FormSuccessScreen = ({ closeEvent }) => {
  return (
    <section className="form__success-screen" onClick={closeEvent}>
      <img src={disco__icon} />
      <h1>Ahooooy!</h1>
      <p>Thank you for buying a seat, we will confirm the flight soon.</p>
    </section>
  );
};

export default FormSuccessScreen;
