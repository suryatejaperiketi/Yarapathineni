import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import About from './Components/LandingPage/About';
import PhotosLanding from './Components/Pages/PhotosLanding';
import VideosLanding from './Components/Pages/VideosLanding';
import ContactUs from './Components/LandingPage/ContactUs';
import People from './Components/LandingPage/People';
import Accomplishment from './Components/Pages/Accomplishment';
import SpiritualInitiatives from './Components/Pages/SpiritualInitiatives';
import Cmrf from './Components/Pages/Cmrf';
import Journey from './Components/LandingPage/Journey';
import Development from './Components/LandingPage/Development';
import News from './Components/Pages/News';
import NewsDetails from "./Components/Pages/NewsDetails";
import DashboardLayout from "./Components/Dashboard/DashboardLayout"
import PublicLayout from './Components/PubilcLayout/PubilcLayout';
import Login from './Components/LandingPage/Login';


function App() {
  return (
    <div className="App">
  
      <Routes>
        <Route element={<PublicLayout/>}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About/>} />
        <Route path="/development" element={<Development/>} />
        <Route path="/journey" element={<Journey/>} />
        <Route path="/accomplishment" element={<Accomplishment/>} />
        <Route path="/cmr-funds" element={<Cmrf/>} />
        <Route path="/photos/*" element={<PhotosLanding/>} />
        <Route path="/videos/*" element={<VideosLanding/>} />
        <Route path="/people" element={<People/>} />
        <Route path="/spiritual-initiatives" element={<SpiritualInitiatives/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/news" element={<News/>} />
        <Route path="/news/:slug" element={<NewsDetails/>} />
        </Route>
        <Route path="/dashboard/*" element={<DashboardLayout/>} />
        <Route path="/login" element={<Login/>} />

      </Routes>
  
    </div>
  );
}

export default App;
