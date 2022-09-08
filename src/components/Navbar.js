// assets
import link_image from '../assets/img/icon/InPlease.svg'
import link_image_responsive from '../assets/img/icon/inplease-logo-mobile.svg'

function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <div className="navbar__container">
          <div className="navbar__container-left">
            <img
              className="navbar__container-left-img"
              alt="in-please-logo"
              src={link_image}
              id="img"
            />
            <img
              className="navbar__container-left-img-responsive"
              alt="in-please-logo"
              src={link_image_responsive}
              id="img"
            />
          </div>
          <div className="navbar__container-right">
            <p className="navbar__container-right-information">
              (57) 3053165774 - jhornan@in-please-com
            </p>
            <i className="navbar__container-right-button"></i>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
