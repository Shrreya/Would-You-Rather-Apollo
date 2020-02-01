import React from "react"
import { Link } from "@reach/router"
import styled from "styled-components"

import Layout from "../components/Layout/Layout"
import PrimaryButtonLink from "../components/UI Components/PrimaryButtonLink"

const NotFoundPage = () => (
  <Layout>
    <Header>
      <div>
        <h1 className="padding-topbot-2">Error 404 - Page could not be found</h1>
        <PrimaryButtonLink marginauto="true" to="/">Back to home</PrimaryButtonLink>
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
    color: var(--mainWhite);
  }
`

export default NotFoundPage
