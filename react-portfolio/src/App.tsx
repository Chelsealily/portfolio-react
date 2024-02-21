
import { BrowserRouter } from 'react-router-dom'
import './App.scss'
import Nav from './Components/Nav/Nav'
import logo from "./Images/logo.png"
import ScrollToTop from 'react-scroll-to-top'
import Header from './Components/Header/Header'
import Skills from './Components/Skills/Skills'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
      
        <section className='logo'>
      <img src={logo} alt='Chelsea Li - tech portfolio - react website project'></img>  
    </section>
    <Nav/>
    <Header/>
    <section className='skills-section'>
    <Skills/>
    </section>
    <Footer/>
    <ScrollToTop smooth />
      </BrowserRouter>
    </>
  )
}

export default App
