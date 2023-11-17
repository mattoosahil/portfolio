import './App.css';
import SplashPage from './splash-page/SplashPage';
import Navbar from './nav-bar/NavBar';
import { useRef } from 'react';
 import {  Route, Routes } from 'react-router-dom';
 import { Element } from 'react-scroll';
import About from './about/About';
import Education from './education/Education';

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
        <Element name="home" id='home'>
        <SplashPage />
        </Element>
        <Element name="about" id='about'>
        <About />
        </Element>
        <Element name="education" id='education'>
        <Education />
        </Element>
    </>
  );
}

export default App;
