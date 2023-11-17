 import React from 'react'
 import { Nav, NavMenu, NavBtn, ScrollLinks, NavBtnLink, Bars } from './NavBarStyledComponents'


import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar(props) {
  return (
    <>
                 <Nav>
                     <Bars />
                     <NavMenu>
                     <ScrollLinks to="home" >
                             Home
                         </ScrollLinks>
                         <ScrollLinks to="about" >
                             About
                         </ScrollLinks>
                        <ScrollLinks to="education" activeStyle>
                             Education
                         </ScrollLinks>
                         <ScrollLinks to="/annual" activeStyle>
                             Work Experience
                         </ScrollLinks>
                         <ScrollLinks to="team" activeStyle>
                             Projects
                         </ScrollLinks>
                         <ScrollLinks to="blogs" activeStyle>
                            Contact
                         </ScrollLinks>
                         <ScrollLinks to="sign-up" activeStyle>
                             Resume
                         </ScrollLinks>           
                     </NavMenu>
                     {/* <NavBtn>
                         <NavBtnLink to="/signin">
                             Resume
                         </NavBtnLink>
                     </NavBtn> */}
                 </Nav>
             </>
  )
}

// export default function Navbar(props) {
//     const handleClick = () => {
//         props.handleClick('about');
//       };
//     return (
//       <>
//             <div onClick={handleClick}>
//                              About
//                          </div>
//                </>
//     )
//   }