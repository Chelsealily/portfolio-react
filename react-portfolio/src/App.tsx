import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Nav from "./Components/Nav/Nav";
import logo from "./Images/logo.png";
import ScrollToTop from "react-scroll-to-top";
import About from "./Pages/About/About";
import Homepage from "./Pages/Homepage/Homepage";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <section className="logo">
          <img
            src={logo}
            alt="Chelsea Li - tech portfolio - react website project"
          ></img>
        </section>
        <Nav />

        <ScrollToTop smooth />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Footer/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
