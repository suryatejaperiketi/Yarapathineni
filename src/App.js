
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage/LandingPage';
import About from './Components/LandingPage/About';
import Work from './Components/LandingPage/Work';
import Constitution from './Components/LandingPage/Constitution';
import PhotosLanding from './Components/Pages/PhotosLanding';
import VideosLanding from './Components/Pages/VideosLanding';
import ContactUs from './Components/LandingPage/ContactUs';
import Footer from "./Components/LandingPage/Footer";
import People from './Components/LandingPage/People';
import Accomplishment from './Components/Pages/Accomplishment';
import SpiritualInitiatives from './Components/Pages/SpiritualInitiatives';
import Cmrf from './Components/Pages/Cmrf';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About/>} />
        <Route path="/works" element={<Work/>} />
        <Route path="/constitution" element={<Constitution/>} />
        <Route path="/accomplishment" element={<Accomplishment/>} />
        <Route path="/cmr-funds" element={<Cmrf/>} />
        <Route path="/photos/*" element={<PhotosLanding/>} />
        <Route path="/videos/*" element={<VideosLanding/>} />
        <Route path="/people" element={<People/>} />
        <Route path="/spiritual-initiatives" element={<SpiritualInitiatives/>} />
        <Route path="/contact" element={<ContactUs/>} />
      </Routes>
        <Footer/>
    </div>
  );
}

export default App;
