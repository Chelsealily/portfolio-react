import "./About.scss"
import girl from "../../Images/aboutgirl.png"
import logoLi from "../../Images/Group 60.svg"
import logoGithub from "../../Images/bottom.svg"

const About = () => {
    return (
        <div className="about__withpic">
        <section className="about" id="about">

        <div className="about__h2andtext">

        <h3 className="about__h2">{ "> About Me"}</h3>

          <p className="about__text">
            Hi! I'm Chelsea, I am a hard-working and motivated individual with an entrepreneurial mindset. 
            <br></br>
            <br></br>
            My journey has helped me to develop teamwork, interpersonal and attention to detail skills. ​
            <br></br>
            <br></br>
            I encountered development through my own business venture where I created my own website. 
            <br></br>
            <br></br>
            I then went on to work for an E-commerce brand where I found myself enjoying the technical sides of business more. 
            <br></br>
            <br></br>
            I decided to carry on my curiosity via completing the Google Cybersecurity Certification and the full stack _nology tech training course! 
            <br></br>
            <br></br>
            
I also have a creative side where I dance and take theatre classes.
          </p>
        </div>
       
      </section>
     <div className="about__pic">
     <img src={girl} alt="about me computer girl" width="300px"></img>
     <div>
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
        /></a> 
     </div>
     </div>
     </div>
    )}

    export default About;