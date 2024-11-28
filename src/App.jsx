
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Client from './components/Client';
import Community from './components/Community';
import Pixel from './components/Pixel';
import StatsSection from './components/StatsSection';
import TestimonialCard from './components/TestimonialCard';
import CustomerLogos from './components/CustomorLogos';
import BlogSection from './components/BlogSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import './App.css'
import img1 from "./assets/Images/two_people.png"
import img2 from "./assets/Images/phone_girl.svg"
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <HeroSection />
        <Client />
        <Community />
        <Pixel
          img={img1}
          content={
            <>
              The unseen of spending
              three <br /> years at Pixelgrade
            </>
          }
        />
        <StatsSection />
        <Pixel
          img={img2}
          content={
            <>
              How to design your site footer like
              <br />we did
            </>
          }
        />

        <TestimonialCard />
        <BlogSection />
        <CTASection />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
