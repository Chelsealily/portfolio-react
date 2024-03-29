import { HashRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.scss";
import Nav from "./Components/Nav/Nav";
import logo from "./Images/logo.png";
import ScrollToTop from "react-scroll-to-top";
import About from "./Pages/About/About";
import Homepage from "./Pages/Homepage/Homepage";
import Contact from "./Pages/Contact/Contact";
import Projects from "./Pages/Projects/Projects";

function App() {
  return (
    <>
      <Router>
        <section className="logo">
          <Link to="/">
            <img
              src={logo}
              alt="Chelsea Li - tech portfolio - react website project"
            />
          </Link>
        </section>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <ScrollToTop smooth />
      </Router>
    </>
  );
}

export default App;
