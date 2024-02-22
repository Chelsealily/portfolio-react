import Cyber from "../../Components/Cyber/Cyber";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Skills from "../../Components/Skills/Skills";
import "../Homepage/Homepage.scss";

const Homepage = () => {
  return (
    <div>
      <Header />
      <section className="skills-section">
        <Skills />
      </section>
      <Cyber />

      <Footer />
    </div>
  );
};

export default Homepage;
