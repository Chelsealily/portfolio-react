import "../Footer/Footer.scss"
import logoGithub from "../../Images/bottom.svg"
import logoLi from "../../Images/Group 60.svg"

const Footer = () => {
    return (

        <section className="footer" id="footer">
          <div >
            </div>
            <div className="footerlogos">
        <a href="https://github.com/Chelsealily" target="_blank">
        <img
          className="footer__logo"
          src={logoGithub}
          alt="github logo"
        /></a>
        <a href="https://www.linkedin.com/in/chellypl/" target="_blank"><img
          className="footer__logo"
          src={logoLi}
          alt="linkedin logo"
        /></a></div>
      
      <div>
        <p className="footer__email">📩 cpearl_li@live.com</p>
      </div>
      </section>
    )
}

export default Footer;