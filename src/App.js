import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/home/Home'
import About from './components/about/About'
import Services from './components/services/Services'
import Careers from './components/careers/Careers'
import Contact from './components/contact/Contact'
import Apply from "./components/careers/Apply";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path='services' element={<Services />} />
          <Route path='careers' element={<Careers />} />
          <Route path='careers/apply' element={<Apply />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
