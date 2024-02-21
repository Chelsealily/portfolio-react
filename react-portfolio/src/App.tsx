
import { BrowserRouter } from 'react-router-dom'
import './App.scss'
import Nav from './Components/Nav/Nav'
import logo from "./Images/logo.png"
import ScrollToTop from 'react-scroll-to-top'
import Header from './Components/Header/Header'

function App() {

  return (
    <>
      <BrowserRouter>
      
        <section className='logo'>
      <img src={logo} alt='Chelsea Li - tech portfolio - react website project'></img>  
    </section>
    <Nav/>
    <Header/>
    
    <ScrollToTop smooth />
      </BrowserRouter>
    </>
  )
}

export default App
