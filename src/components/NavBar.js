import React from 'react';
// import { NavLink } from 'react-router-dom';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.css';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';




export default function NavBar() {
  return (
    /**Reference: https://getbootstrap.com/docs/5.1/examples/headers/#
     * The tenth header at the bottom, but changed to navbar-expand-sm,
     * and changed all <a> tag to NavLink.
     */ 

<<<<<<< HEAD
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Tenth navbar example">
     <div className="container-fluid">
       <a className="navbar-brand" href="/">Navbar</a>
       <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
       </button>
 
       <div className="navbar-collapse justify-content-md-center collapse" id="navbarsExample08" data-toggle="collapse" data-target=".navbar-collapse">
         <ul className="navbar-nav">
           <li className="nav-item">
            <NavLink className="nav-link px-5" exact to="/" activeclassname="active"><span>Home</span></NavLink>
           </li>

           <li className="nav-item dropdown">
             <NavLink className="nav-link dropdown-toggle px-5" exact to="/game" id="dropdown08" data-bs-toggle="dropdown" aria-expanded="false" activeclassname="active"><span>Game</span></NavLink>
             {/* <a className="nav-link dropdown-toggle" href="#" id="dropdown08" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a> */}
             
             <ul className="dropdown-menu" aria-labelledby="dropdown08">
               {/* <li><a className="dropdown-item" href="#">Action</a></li>
               <li><a className="dropdown-item" href="#">Another action</a></li>
               <li><a className="dropdown-item" href="#">Something else here</a></li> */}

               <li><NavLink className="dropdown-item" exact to="/game/easy"><span>Easy</span></NavLink></li>
               <li><NavLink className="dropdown-item" exact to="/game/medium"><span>Medium</span></NavLink></li>
               <li><NavLink className="dropdown-item" exact to="/game/hard"><span>Hard</span></NavLink></li>
             </ul>
           </li>

           <li className="nav-item">
            <NavLink className="nav-link px-5" extact to="/rule" activeclassname="active"><span>Rule</span></NavLink>
           </li>
           {/* <li className="nav-item">
             <a className="nav-link disabled">Disabled</a>
           </li> */}
           
         </ul>
       </div>
     </div>
    </nav> 
=======
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
>>>>>>> 260f9630dcc479d08ec07ab9ffc8009ca592d634
  
  )
};
