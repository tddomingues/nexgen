
import './App.css'
import AboutMe from './components/aboutMe/AboutMe'
import BackToTop from './components/backToTop/BackToTop'
import Banner from './components/banner/Banner'
import Contact from './components/contact/Contact'
import Customers from './components/customers/Customers'
import Faq from './components/faq/Faq'
import Footer from './components/footer/Footer'
import NavBar from './components/navBar/NavBar'
import Services from './components/services/Services'

function App() {


  return (
    <>
      <NavBar/>
      <Banner/>
      <Customers/>
      <AboutMe/>  
      <Services/>
      <Contact/>
      
      <Faq/>
      <Footer/>
      <BackToTop/>
    </>
  )
}

export default App
