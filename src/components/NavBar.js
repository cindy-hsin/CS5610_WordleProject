import React from 'react';
// import { NavLink } from 'react-router-dom';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.css';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import './NavBar.css';


export default function NavBar() {
  return (
    /**Reference: https://getbootstrap.com/docs/5.1/examples/headers/#
     * The tenth header at the bottom, but changed to navbar-expand-sm,
     * and changed all <a> tag to NavLink.
     */
    <div className="nav-bar">
     <Navbar bg="dark" variant="dark" expand="lg">
       <Container>
         <Navbar.Brand href="/">Wordle Game</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="me-auto">
             <Nav.Link href="/" activeclassname="highlighted">Home</Nav.Link>
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
    </div>
  )
};
