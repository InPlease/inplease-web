// Link image Component
import link from '../link.svg'

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-link">
          <div className="link-logo">
            <a href="https://www.linkedin.com/company/inplease/">Linkedin</a>
            <img className="logo" src={link} alt="Link" />
          </div>
          <div className="link-logo">
            <a href="https://github.com/InPlease">GitHub</a>
            <img className="logo" src={link} alt="Link" />
          </div>
        </div>
      </div>
      <div>
        <p>&copy; Copyright InPlease 2022.</p>
      </div>
    </footer>
  )
}

export default Footer
