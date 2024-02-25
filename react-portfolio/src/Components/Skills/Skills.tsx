import "./Skills.scss"
import logoCss from "../../Images/Logo (1).svg"
import logoGit from "../../Images/Logo9.svg"
import logoHtml from "../../Images/Logo (8).svg"
import logoJS from "../../Images/Logo (2).svg"
import logoSass from "../../Images/Logo (3).svg"
import logoBem from "../../Images/Logo (4).svg"
import logoReact from "../../Images/Logo (5).svg"
import logoJava from "../../Images/Logo (6).svg"
import logoSpring from "../../Images/Logo (7).svg"

const Skills = () => {
    return (

<section className="skills">
        <h3 className="skills__title"> {"> Technical Skills"}</h3>
        <p className="skills__description">
          I love learning and trying new things! 
          <br></br>
          Here are some of the skills I have learnt along the way.
        </p>
        <div className="skills__grid">
          <div>
            <img className="skills__icon" src={logoGit} alt="git logo" />
            <p className="skills__icon--label">Git</p>
          </div>
          <div>
            <img className="skills__icon" src={logoHtml} alt="html5 logo" />
            <p className="skills__icon--label">Html5</p>
          </div>
          <div>
            <img className="skills__icon" src={logoCss} alt="css3 logo" />
            <p className="skills__icon--label">Css</p>
          </div>
          <div>
            <img className="skills__icon" src={logoJS} alt="javascript logo" />
            <p className="skills__icon--label">Javascript</p>
          </div>
          <div>
            <img className="skills__icon" src={logoSass} alt="sass logo" />
            <p className="skills__icon--label">SASS</p>
          </div>
          <div>
            <img className="skills__icon" src={logoBem} alt="bem logo" />
            <p className="skills__icon--label">Bem</p>
          </div>
          <div>
            <img className="skills__icon" src={logoReact} alt="react logo" />
            <p className="skills__icon--label">React</p>
          </div>
          <div>
            <img className="skills__icon" src={logoJava} alt="java logo" />
            <p className="skills__icon--label">Java</p>
          </div>
          <div>
            <img className="skills__icon" src={logoSpring} alt="spring boot logo" />
            <p className="skills__icon--label">Spring Boot</p>
          </div>
          
        </div></section>
    )
}

export default Skills;
