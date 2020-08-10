import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const NavBar = () => {
  return (
    <Navbar
      className="navigation justify-content-end"
      collapseOnSelect
      expand="sm"
    >
      <Navbar.Toggle
        style={{ borderColor: "rgba(0, 0, 0, 0.5)" }}
        aria-controls="responsive-navbar-nav"
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto mr-auto">
          <AniLink fade to="/">
            <Nav.Link
              as="div"
              style={{ color: "black" }}
              className="navigation__link"
              href="#Home"
            >
              Home
            </Nav.Link>
          </AniLink>
          <AniLink fade to="/faq">
            <Nav.Link
              as="div"
              style={{ color: "black" }}
              className="navigation__link"
              href="#FAQ"
            >
              FAQ
            </Nav.Link>
          </AniLink>
          <AniLink fade to="/booking">
            <Nav.Link
              as="div"
              style={{ color: "black" }}
              className="navigation__link"
              href="#Booking"
            >
              Booking
            </Nav.Link>
          </AniLink>
          <AniLink fade to="/pricing-and-policy">
            <Nav.Link
              style={{ color: "black" }}
              className="navigation__link"
              href="#Pricing-and-Policy"
            >
              Pricing and Policy
            </Nav.Link>
          </AniLink>
          <AniLink fade to="/about-us">
            <Nav.Link
              style={{ color: "black" }}
              className="navigation__link"
              href="#About-Us"
            >
              About Us
            </Nav.Link>
          </AniLink>
          <AniLink fade to="/blog">
            <Nav.Link
              style={{ color: "black" }}
              className="navigation__link"
              href="#Blog"
            >
              Blog
            </Nav.Link>
          </AniLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
