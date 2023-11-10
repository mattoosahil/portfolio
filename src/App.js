import './App.css';
import SplashPage from './splash-page/SplashPage';
import Navbar from './nav-bar/NavBar';
import { useRef } from 'react';
 import {  Route, Routes } from 'react-router-dom';
import About from './about/About';

function App() {
  //const ref = useRef(null);
  // const handleClick = (id) => {
  //   // const id ='home';
  //   console.log(id)
  //   const element = document.getElementById(id);
  //   console.log(element);
  //   if (element) {
  //     console.log('if')
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/portfolio" element={<SplashPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <About />
      </div>
    </>
  );
}

export default App;
