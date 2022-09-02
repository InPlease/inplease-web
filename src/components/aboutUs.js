//assents
import founder__image from '../assets/img/founder__image.svg'
function AboutUs() {
  return (
    <div className="about">
      <div className="about-components">
        <h2 className="about-title">
          We were born as a
          <span className="about-title-textColor"> dream,</span> we became a
          crazy
          <span className="about-title-textColor"> idea</span> and ended up
          being a<span className="about-title-textColor"> reality</span>
        </h2>
        <p className="about-paragraf">
          InPlease was born as a dram, an idea and a reality. We created the
          company not to be a competition but an opportunity fot artists to
          express themselves in their own way, a way in which juniors and
          seniors come together to build great products. InPlease is a cry of
          fury
        </p>
        <div className="about-sections">
          <div className="about-sections-creativity">
            <h1 className="about-sections-creativity-title">
              01 <span className="about-title-textColor">Creativity</span>
            </h1>
            <h3 className="about-sections-creativity-firstTitle">
              We love what we do
            </h3>
            <p className="about-sections-creativity-firstContent">
              Lorem Ipsum
            </p>

            <h3 className="about-sections-creativity-secondTitle">
              We understand the market
            </h3>

            <p className="about-sections-creativity-secondContent">
              Lorem Ipsum
            </p>
          </div>

          <div className="about-sections-tecnology">
            <h1 className="about-sections-tecnology-title">
              02 <span className="about-title-textColor">Technology</span>
            </h1>
          </div>

          <h3 className="about-sections-tecnology-firstTitle">We are nerds</h3>

          <p className="about-sections-tecnology-firstContent">Lorem Ipsum</p>

          <h3 className="about-sections-tecnology-secondTitle">
            We are trained
          </h3>

          <p className="about-sections-tecnology-secondContent">Lorem Ipsum</p>
        </div>
        <div className="about-ourFamily">
          <h1 className="about-ourFamily-title">Our family</h1>

          <img
            className="about-ourFamily-img"
            src={founder__image}
            alt="Our Family"
          />

          <h3 className="about-ourFamily-personIfo">Jhornan Colina</h3>
          <h3 className="about-ourFamily-personIfo"> Founder</h3>
        </div>

        <h4 className="about-lema">
          {' '}
          <span className="about-title-textColor">"</span> Let's build something
          different, let's create art.
          <span className="about-title-textColor"> "</span>
        </h4>

        <div className="about-button">
          <button className="about-button-Contact">Contact us :)</button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
