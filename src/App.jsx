import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './Project.css'
import Navbar from './Navbar.jsx'
import Carousel  from './Carousel.jsx'
import Cards from './Cards.jsx'
import About from './About.jsx'
import Services from './Services.jsx'
import Portfolio from './Portfolio.jsx'
import Footer from './Footer.jsx'

function App() {

  return (
    <>
    <Navbar />
    <Carousel />
    <Cards />
    <About />
    <Services />
    <Portfolio />
    <Footer />
    </>
  )
}

export default App
