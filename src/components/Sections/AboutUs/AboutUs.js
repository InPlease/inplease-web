//impor img
import Carousel from './Carousel';

const AboutUs = ({ aboutTexts }) => {
  const { title, content, section, carousel, ourFamily } = aboutTexts;

  return (
    <div className="about">
      <div className="about-components">
        <h2 className="about-title">
          {title['1']}{' '}
          <span className="about-title-textColor">{title['2']}</span>
          {title['3']}{' '}
          <span className="about-title-textColor">{title['4']}</span>
          {title['5']}{' '}
          <span className="about-title-textColor">{title['6']}</span>
        </h2>
        <p className="about-paragraf">{content}</p>
      </div>
      <div className="about-sections">
        {section.map((e, i) => (
          <>
            <h1 className="about-sections-title">
              0{i + 1}
              <span className="about-title-textColor">{e.title}</span>
            </h1>
            <div className="about-sections-firstComponents">
              <h3 className="about-sections-firstTitle">{e.firstTitle}</h3>
              <p className="about-sections-firstContent">{e.firstContent}</p>
            </div>
            <div className="about-sections-firstComponents">
              <h3 className="about-sections-secondTitle">{e.secondTitle}</h3>
              <p className="about-sections-secondContent">{e.secondContent}</p>
            </div>
          </>
        ))}
      </div>
      <div className="about-ourFamily">
        <h1 className="about-ourFamily-title">{ourFamily['title']}</h1>
        <div className="carousel">
          <Carousel carousel={carousel} />
        </div>
      </div>
      <h4 className="about-lema">
        <span className="about-title-textColor">" </span>
        {ourFamily['content']}
        <span className="about-title-textColor"> "</span>
      </h4>
      <div className="about-button">
        <button className="about-button-Contact">Contact us :)</button>
      </div>
    </div>
  );
};

export default AboutUs;
