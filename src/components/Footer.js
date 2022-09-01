// assets
import link_image from '../assets/img/icon/link_image.svg'

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-left">
          <div className="footer-left-linkedin">
            <a
              className="footer-left-text"
              href="https://www.linkedin.com/company/inplease/"
            >
              Linkedin
            </a>
            <img className="footer-left-link" src={link_image} alt="Link" />
          </div>
          <div className="footer-left-github">
            <a className="footer-left-text" href="https://github.com/InPlease">
              GitHub
            </a>
            <img className="footer-left-link" src={link_image} alt="Link" />
          </div>
        </div>
        <div className="footer-right-copyright">
          <p>&copy; Copyright InPlease 2022.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
