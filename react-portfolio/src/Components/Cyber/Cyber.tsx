import "./Cyber.scss"
import goog from "../../Images/goog.png"

const Cyber = () => {
    return (
    <section className="cyber">
    <div>
    <a href="https://coursera.org/share/856082336482365df96809d5e04dfb94" target="_blank">
    <img className="cyber__pic" src={goog} alt="Google Cybersecurity certification"  /> 
    <p className="cyber__pic--label"> Cybersecurity </p></a> </div>
    <p className="cyber__pic--desc">I also completed the Google Cybersecurity Certification which was an 8 module course where I learned tools of the trade such as SQL, Python and Linux Line command.</p>
    </section>
    

    )}


export default Cyber;