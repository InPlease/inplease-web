// Dependencies
import disco__icon from '../../../assets/img/icon/disco-icon.svg';

const FormSuccessScreen = ({ closeEvent, translation }) => {
  return (
    <section className="form__success-screen" onClick={closeEvent}>
      <img src={disco__icon} alt="flying saucer" />
      <h1>{translation.scream}</h1>
      <p>{translation.information}</p>
    </section>
  );
};

export default FormSuccessScreen;
