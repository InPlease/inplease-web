import Carrusel from './carousel'
import { about } from '../itemsComponents/aboutItems'
function AboutUs() {
  return (
    <div className="about">
      <div className="about-components">
        {about.map((item) => {
          return (
            <>
              <h2 className="about-title">
                We were born as a
                <span className="about-title-textColor"> dream,</span> we became
                a crazy
                <span className="about-title-textColor"> idea</span> and ended
                up being a
                <span className="about-title-textColor"> reality</span>
              </h2>
              <p className="about-paragraf">{item.about.content}</p>
              <div className="about-sections">
                <div className="about-sections-creativity">
                  <h1 className="about-sections-creativity-title">
                    01{' '}
                    <span className="about-title-textColor">
                      {item.about.creativity.title}
                    </span>
                  </h1>
                  <div className="about-sections-creativity-firstComponents">
                    {' '}
                    <h3 className="about-sections-creativity-firstTitle">
                      {item.about.creativity.firstTitle}
                    </h3>
                    <p className="about-sections-creativity-firstContent">
                      {item.about.creativity.firstContent}
                    </p>
                  </div>
                  <div className="about-sections-creativity-firstComponents">
                    <h3 className="about-sections-creativity-secondTitle">
                      {item.about.creativity.secondTitle}
                    </h3>
                    <p className="about-sections-creativity-secondContent">
                      {item.about.creativity.secondContent}
                    </p>
                  </div>
                </div>

                <div className="about-sections-tecnology">
                  <h1 className="about-sections-tecnology-title">
                    02{' '}
                    <span className="about-title-textColor">
                      {item.about.technology.title}
                    </span>
                  </h1>
                </div>
                <div className="about-sections-tecnology-secondComponents">
                  <h3 className="about-sections-tecnology-firstTitle">
                    {item.about.technology.firstTitle}
                  </h3>

                  <p className="about-sections-tecnology-secondContent">
                    {item.about.technology.firstContent}
                  </p>
                </div>
                <div className="about-sections-tecnology-secondComponents">
                  <h3 className="about-sections-tecnology-secondTitle">
                    {item.about.technology.secondTitle}
                  </h3>

                  <p className="about-sections-tecnology-secondContent">
                    {item.about.technology.secondContent}
                  </p>
                </div>
              </div>
            </>
          )
        })}
        <div className="about-ourFamily">
          <h1 className="about-ourFamily-title">Our family</h1>

          <Carrusel />
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
