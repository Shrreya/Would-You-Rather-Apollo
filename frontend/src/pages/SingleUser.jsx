import React from "react"
import styled from "styled-components"
import { Query } from "react-apollo"
import moment from "moment"

import { GET_USER } from "../queries/index"
import Loading from "../components/Home/Loading"
import Error from "../components/Home/Error"
import Layout from "../components/Layout/Layout"

const SingleUser = props => {
  const userId = props.userId
  console.log("userId", userId)
  console.log("SingleUser props", props)

  return (
    <Query
      query={GET_USER}
      variables={{
        userId
      }}
    >
      {({ data, loading, error }) => {
        console.log("SingleUser data", data)
        return (
          <Layout>
            <StyledMainContainer>
              {error && (
                <StyledSecondaryHeader>
                  <Error message="Data could not be fetched..." />
                </StyledSecondaryHeader>
              )}
              {loading ? (
                <StyledSecondaryHeader>
                  <Loading />
                </StyledSecondaryHeader>
              ) : (
                data && (
                  <StyledContainer>
                    <StyledHeader>Single User</StyledHeader>
                    <StyledArticle>
                      <p>{data.getUser.username}</p>
                      <p>{data.getUser.firstName}</p>
                      <p>{data.getUser.lastName}</p>
                      {/* <p>{moment(data.getUser.createdAt).fromNow()}</p> */}
                    </StyledArticle>
                  </StyledContainer>
                )
              )}
            </StyledMainContainer>
          </Layout>
        )
      }}
    </Query>
  )
}

const StyledMainContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(
    100vh - var(--navbar-height) - var(--footer-height) -
      var(--footerParagraph-text)
  );
`

const StyledContainer = styled.div`
  text-align: center;
  /* box-shadow: 0px 1px 4px 0.6px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 0px 1px 4px 0.6px rgba(0, 0, 0, 0.25);
  -webkit-appearance: none; */
  height: 100%;
  width: 100%;
  max-width: 80%;
  background: transparent;
  padding: 2rem 0;
`

const StyledArticle = styled.article`
  border-radius: var(--borderRadius-1);
  box-shadow: 0px 1px 4px 0.6px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 0px 1px 4px 0.6px rgba(0, 0, 0, 0.25);
  -webkit-appearance: none;
  max-width: 400px;
  background-color: var(--mainWhite);
  margin: auto;
  padding: 15px 20px;
  position: relative;
  p {
    padding: 0.5rem 0;
  }
`

const StyledHeader = styled.h1`
  text-align: center;
  font-size: calc(1.5rem + 1vmin);
  padding: 0 0 2rem 0;
  color: var(--mainWhite);
`

const StyledSecondaryHeader = styled.h2`
  text-align: center;
  font-size: calc(1rem + 1vmin);
  padding: 0 0 2rem 0;
  color: var(--mainWhite);
`

export default SingleUser
