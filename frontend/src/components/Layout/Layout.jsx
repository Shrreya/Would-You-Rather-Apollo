import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </React.Fragment>
  )
}

const StyledMain = styled.main`
  background-image: linear-gradient(to right, #655ba6, #4d4291);
  min-height: calc(100vh - var(--navbar-height) - var(--footer-height));
  margin: auto;
  /* max-width: 960px; */
`

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
