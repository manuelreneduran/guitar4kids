import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
const NavBar = () => {
  return (
    <Navbar
      className="navigation justify-content-end"
      collapseOnSelect
      expand="md"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto mr-auto">
          <Nav.Link className="navigation__link" href="#Home">
            Home
          </Nav.Link>
          <Nav.Link className="navigation__link" href="#FAQ">
            FAQ
          </Nav.Link>
          <Nav.Link className="navigation__link" href="#Booking">
            Booking
          </Nav.Link>
          <Nav.Link className="navigation__link" href="#Pricing-and-Policy">
            Pricing and Policy
          </Nav.Link>
          <Nav.Link className="navigation__link" href="#About-Us">
            About Us
          </Nav.Link>
          <Nav.Link className="navigation__link" href="#Blog">
            Blog
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
