import React from 'react';
import { NavLink } from 'react-router-dom';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.css';
// import 'jquery/dist/jquery.slim.min.js';
// import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';




export default function NavBar() {
  return (
    /**Reference: https://getbootstrap.com/docs/5.1/examples/headers/#
     * The tenth header at the bottom, but changed to navbar-expand-sm,
     * and changed all <a> tag to NavLink.
     */ 

     <Navbar bg="dark" variant="dark" expand="lg">
     <Container>
       <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="me-auto">
           <Nav.Link href="/">Home</Nav.Link>
           <NavDropdown title="Game" id="basic-nav-dropdown">
             <NavDropdown.Item href="/game/easy">Easy</NavDropdown.Item>
             <NavDropdown.Item href="/game/medium">Medium</NavDropdown.Item>
             <NavDropdown.Item href="/game/hard">Hard</NavDropdown.Item>
           </NavDropdown>
           <Nav.Link href="/rule">Rule</Nav.Link>
         </Nav>
       </Navbar.Collapse>
     </Container>
   </Navbar>
  
  )
};



// <header>
// <div className="px-3 py-2 bg-dark text-white">
//   <div className="container">
//     <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
//       {/* <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
//         <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"></use></svg>
//       </a> */}

//       <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
//         <li>
//           {/* <a href="#" className="nav-link text-secondary">
//             <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#home"></use></svg>
//             Home
//           </a> */}

//           <NavLink className="nav-link text-white">
//             <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlinkHref="#home"></use></svg>
//             Home
//           </NavLink>
//         </li>
//         <li>
//           {/* <a href="#" className="nav-link text-white">
//             <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#speedometer2"></use></svg>
//             Dashboard
//           </a> */}
//           <NavLink className="nav-link text-white">
//             <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlinkHref="#speedometer2"></use></svg>
//             Rule
//           </NavLink>
//         </li>
//         <li>
//           <NavLink className="nav-link text-white">
//             <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlinkHref="#grid"></use></svg>
//             Game
//           </NavLink>
//         </li>
//       </ul>
//     </div>
//   </div>
// </div>
// </header>