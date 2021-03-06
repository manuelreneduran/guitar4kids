import React from "react"
import NavBar from "./Nav/NavBar"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "../scss/main.scss"
import Footer from "./Footer"
const Layout = ({ children, home }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <NavBar home={home} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
