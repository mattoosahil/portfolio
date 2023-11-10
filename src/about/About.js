import React from 'react'
import aboutImg from '../img/about-img.png'
import { Container, InnerContainer } from './AboutConst'
import './About.css'
export default function About() {
  return (
    <>
    <Container>
       <InnerContainer className='aboutTxt'> 
        <p className='aboutTxt'>
        Passionate software developer with a deep-rooted love for coding. 
        With a relentless curiosity and a commitment to continuous learning, I thrive in the dynamic world of technology 
        I am highly experienced in working with front-end and back-end web development technologies.
        </p> 
      </InnerContainer>
      <InnerContainer>  
        <img className='aboutImg' src={aboutImg} alt="about image" /> 
      </InnerContainer>
      
    </Container>
    </>
  )
}
