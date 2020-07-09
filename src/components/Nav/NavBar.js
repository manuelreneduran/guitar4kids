import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const NavBar = ({ home }) => {
  return (
    <Navbar
      className="navigation justify-content-end"
      collapseOnSelect
      expand="sm"
      variant={home ? "dark" : "light"}
      fixed="top"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto mr-auto">
          <AniLink fade to="/">
            <Nav.Link
              className="navigation__link"
              style={home ? { color: "white" } : { color: "black" }}
              href="#Home"
            >
              Home
            </Nav.Link>
          </AniLink>
          <AniLink fade to="faq">
            <Nav.Link
              className="navigation__link"
              style={home ? { color: "white" } : { color: "black" }}
              href="#FAQ"
            >
              FAQ
            </Nav.Link>
          </AniLink>
          <Nav.Link
            className="navigation__link"
            style={home ? { color: "white" } : { color: "black" }}
            href="#Booking"
          >
            Booking
          </Nav.Link>
          <Nav.Link
            className="navigation__link"
            style={home ? { color: "white" } : { color: "black" }}
            href="#Pricing-and-Policy"
          >
            Pricing and Policy
          </Nav.Link>
          <Nav.Link
            className="navigation__link"
            style={home ? { color: "white" } : { color: "black" }}
            href="#About-Us"
          >
            About Us
          </Nav.Link>
          <Nav.Link
            className="navigation__link"
            style={home ? { color: "white" } : { color: "black" }}
            href="#Blog"
          >
            Blog
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
