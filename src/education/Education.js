import React from 'react'
import { Container, InnerContainer, StyledImage, Heading } from './EducationConst'
import neuLogo from '../img/neuLogo.svg'
import sppuLogo from '../img/sppuLogo.webp'

export default function Education() {
  return (
    <Container>
      <InnerContainer> 
       <StyledImage src={neuLogo} alt="about image" />
       <div>
       <Heading>Northeastern University</Heading>
       <h2>Masters of Science in Information Systems</h2>
       <h2>Spring 2022 - Spring 2024</h2>
       </div>
      </InnerContainer>
      <InnerContainer> 
       <StyledImage src={sppuLogo} alt="about image" />  
       <div>
       <Heading>Pune University</Heading>
       <h2>Bachelors of Engineering in Electronics and Telecommunication</h2>
       <h2>Summer 2015 - Spring 2019</h2>
       </div>
      </InnerContainer>
    </Container>
  )
}
