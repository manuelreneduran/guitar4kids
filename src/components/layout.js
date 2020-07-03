import React from "react"
import NavBar from "../containers/NavBar"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "../scss/main.scss"
const Layout = ({ children }) => {
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
      <NavBar />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
