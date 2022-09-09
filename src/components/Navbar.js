// assets
import link_image from '../assets/img/icon/InPlease.svg'
import link_image_responsive from '../assets/img/icon/inplease-logo-mobile.svg'

function Navbar({ showMenu, showMenuEvent }) {
  return (
    <nav>
      <div className="navbar">
        <div className="navbar__container">
          {!showMenu && (
            <>
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
            </>
          )}
          <div
            className={
              !showMenu
                ? 'navbar__container-information'
                : 'navbar__container-information-hide'
            }
          >
            {!showMenu && (
              <div className="navbar__container-information">
                <p className="navbar__container-information-paragraph">
                  (57) 3053165774 - jhornan@in-please-com
                </p>
              </div>
            )}
            <div
              className="navbar__container-menu-button"
              onClick={() => showMenuEvent()}
            >
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
