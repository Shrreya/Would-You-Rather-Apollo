import React from "react"
import { Link } from "@reach/router"

import Layout from "../components/Layout/Layout"
import styled from "styled-components"

const NotFoundPage = () => (
  <Layout>
    <Header>
      <div>
        <h1>Error 404 - Page could not be found</h1>
        <Link to="/">Back to home</Link>
      </div>
    </Header>
  </Layout>
)

const Header = styled.header`
  min-height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: #fff;
  }
`

export default NotFoundPage
