 import React from 'react'
 import { Nav, NavMenu, NavBtn, NavLink, NavBtnLink, Bars } from './NavBarStyledComponents'


import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar(props) {
  return (
    <>
                 <Nav>
                     <Bars />
     
                     <NavMenu>
                     <NavLink to="/" >
                             Home
                         </NavLink>
                         <NavLink to="/about" >
                             About
                         </NavLink>
                        <NavLink to="/events" activeStyle>
                             Education
                         </NavLink>
                         <NavLink to="/annual" activeStyle>
                             Work Experience
                         </NavLink>
                         <NavLink to="/team" activeStyle>
                             Projects
                         </NavLink>
                         <NavLink to="/blogs" activeStyle>
                            Contact
                         </NavLink>
                         <NavLink to="/sign-up" activeStyle>
                             Resume
                         </NavLink>           
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