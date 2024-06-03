
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import  my_logo  from "./assets/logo//trans/5.svg"
import Services from './components/services/Services';
import Achivements from './components/achivements/Achivements';

import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
//import Portfolio from './components/portfolio/Portfolio';
// import Testemonials from './components/testemonial/Testemonials';
function App() {
  return (
    <>
      <div className='container'><a href='#Home'><img src={my_logo} alt="Logo"/></a></div>
    <Header/>
    <Navbar/>
    <About/>
    <Achivements/> 
    <Experience/>
    <Services/> 
    {/*<Portfolio/>*/}
    {/* <Testemonials/> */}
    <Contact/>
    <Footer/>

    </>
  );
}

export default App; 
