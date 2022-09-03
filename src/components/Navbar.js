// assets
import link_image from '../assets/img/icon/InPlease.svg'
import link_image_responsive from '../assets/img/icon/inplease-logo-mobile.svg'

function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <div className="navbar__left">
          <img
            className="navbar__left-img"
            alt="in-please-logo"
            src={link_image}
            id="img"
          />
          <img
            className="navbar__left-img-responsive"
            alt="in-please-logo"
            src={link_image_responsive}
            id="img"
          />
        </div>
        <div className="navbar__right"></div>
      </div>
    </nav>
  )
}

export default Navbar
