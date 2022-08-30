import ourFamily from '../components/ourFamily.svg'
function AboutUs() {
  return (
    <div>
      <div className="AboutUs">
        <h2 className="woeuoeasnzx">
          We were born as a <span className="green">dream,</span> we became a
          crazy
          <span className="green"> idea</span> and ended up being a
          <span className="green"> reality</span>
        </h2>

        <div className="aboutUs-subdiv">
          <p>
            InPlease was born as a dram, an idea and a reality. We created the
            company not to be a competition but an opportunity fot artists to
            express themselves in their own way, a way in which juniors and
            seniors come together to build great products. InPlease is a cry of
            fury
          </p>
        </div>
      </div>
      <div className="aboutUs-div">
        <h1>
          01 <span className="green">Creativity</span>
        </h1>

        <h3>We love what we do</h3>

        <div className="aboutUs-subdiv">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchang
          </p>
        </div>

        <h3>We understand the market</h3>

        <div className="aboutUs-subdiv">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchang
          </p>
        </div>
      </div>
      <div className="aboutUs-div">
        <h1>
          01 <span className="green">Technology</span>
        </h1>

        <h3>We are nerds</h3>

        <div className="aboutUs-subdiv">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchang
          </p>
        </div>

        <h3>We are trained</h3>

        <div className="aboutUs-subdiv">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchang
          </p>
        </div>
      </div>

      <div className="aboutUs-div">
        <div className="aboutUs-subdiv">
          {' '}
          <h1>Our family</h1>
        </div>
        <div className="aboutUs-subdiv">
          <img className="our-Family" src={ourFamily} alt="Founder" />
        </div>

        <h3>Jhornan Colina Founder</h3>
      </div>
      <div className="aboutUs-div">
        <div className="aboutUs-subdiv">
          <h4 className="woeuoeasnzx">
            <span className="green">"</span> Let's build something different,
            let's create art. <span className="green">"</span>
          </h4>
        </div>
        <div className="aboutUs-subdiv">
          <button className="button-about">Contact us :)</button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
