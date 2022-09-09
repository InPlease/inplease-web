// assets
import link_image from '../assets/img/icon/link_image.svg'

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-left">
          <div className="footer-left-linkedinGithub">
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
              <a
                className="footer-left-text"
                href="https://github.com/InPlease"
              >
                GitHub
              </a>
              <img className="footer-left-link" src={link_image} alt="Link" />
            </div>
          </div>
          <div className="footer-left-behance">
            <a
              className="footer-left-text"
              href="https://www.behance.net/inplease"
            >
              Behance
            </a>
            <img className="footer-left-link" src={link_image} alt="Link" />
          </div>
        </div>

        <div className="footer-right-copyright">
          <div className="footer-right-copyright-paragraf">
            <div className="copyright-spam">&copy; Copyright </div>

            <div>InPlease 2022.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
