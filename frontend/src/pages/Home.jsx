import React, { Component } from "react"
import styled from "styled-components"
import { Query } from "react-apollo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { GET_USERS } from "../queries/index"
import Layout from "../components/Layout/Layout"
import Loading from "../components/Home/Loading"
import Error from "../components/Home/Error"
import PrimaryButton from "../components/UI Components/PrimaryButton"
import UserQuestion from "../Assets/user_question.svg"

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // userData: theData
      listOpen: false
    }
  }

  onUserSelected = () => {
    console.log("User selected!")
  }

  toggleList = () => {
    console.log("toggleList got clicked")
    const currentState = this.state.listOpen
    this.setState({ listOpen: !currentState })
  }

  render() {
    console.log("Render App")
    return (
      <Query query={GET_USERS}>
        {({ loading, error, data }) => {
          console.log("data", data)

          const renderContent = () => {
            if (error) {
              return (
                <Layout>
                  <StyledContainer>
                    <Error message="Data could not be fetched..." />
                  </StyledContainer>
                </Layout>
              )
            } else if (loading) {
              return (
                <Layout>
                  <StyledContainer>
                    <Loading />
                  </StyledContainer>
                </Layout>
              )
            }
            return (
              <Layout>
                <StyledContainer>
                  <StyledHeader className="padding-topbot-2">
                    Would You Rather...
                  </StyledHeader>
                  <StyledArticle>
                    <StyledImage src={UserQuestion} alt="User Question" />
                    <RelativeIconContainer>
                      <StyledDropdown
                        className="margin-topbot-2"
                        name="person"
                        onChange={this.onUserSelected}
                        onClick={this.toggleList}
                      >
                        {data.getUsers.map(item => (
                          <option key={item.username} value={item.username}>
                            {item.username}
                          </option>
                        ))}
                      </StyledDropdown>
                      {this.state.listOpen === true ? (
                        <StyledFontAwesomeIcon icon={["fas", "angle-up"]} />
                      ) : (
                        <StyledFontAwesomeIcon icon={["fas", "angle-down"]} />
                      )}
                    </RelativeIconContainer>
                    <PrimaryButton marginauto="true">Log In</PrimaryButton>
                  </StyledArticle>
                </StyledContainer>
              </Layout>
            )
          }

          return <section>{renderContent()}</section>
        }}
      </Query>
    )
  }
}

const StyledContainer = styled.section`
  min-height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`

const StyledHeader = styled.h1`
  color: var(--mainWhite);
`

const StyledArticle = styled.article`
  border-radius: var(--borderRadius-1);
  background-color: var(--mainWhite);
  padding: 20px;
  width: 60%;
  max-width: 450px;
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
  text-align: center;
`

const StyledImage = styled.img`
  width: 75%;
  max-width: 200px;
  display: block;
  margin: auto;
`

const StyledDropdown = styled.select`
  cursor: pointer;
  font-size: inherit;
  line-height: 1em;
  white-space: normal;
  outline: 0;
  transform: rotateZ(0);
  -webkit-transform: rotateZ(0);
  background-color: var(--mainWhite);
  padding: 1rem 2rem 1rem 0.5rem;
  color: rgba(0, 0, 0, 0.87);
  box-shadow: none;
  -webkit-box-shadow: none;
  border: 1px solid rgba(34, 36, 38, 0.15);
  border-radius: var(--borderRadius-1);
  transition: width 0.1s ease, -webkit-box-shadow 0.1s ease;
  -webkit-transition: width 0.1s ease, -webkit-box-shadow 0.1s ease;

  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
`

const RelativeIconContainer = styled.div`
  position: relative;
  display: inline;
  .svg-inline--fa.fa-w-14,
  .svg-inline--fa.fa-w-16 {
    width: calc(0.9rem + 1vmin);
  }
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  -webkit-transform: translate(-200%, 0%);
  -ms-transform: translate(-200%, 0%);
  transform: translate(-200%, 0%);
  pointer-events: none;
`

export default Home
