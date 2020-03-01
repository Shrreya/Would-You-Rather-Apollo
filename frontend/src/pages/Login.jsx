import React, { Component } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Mutation } from "react-apollo"

import { LOGIN_USER } from "../queries/index"
import PrimaryButton from "../components/UI Components/PrimaryButton"
import Layout from "../components/Layout/Layout"

const initialState = {
  errors: {},
  username: "",
  password: ""
}

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ...initialState
    }
  }

  clearState = () => {
    this.setState({ ...initialState })
  }

  handleSubmit = async(event, loginUser) => {
    event.preventDefault()
    loginUser().then(data => {
      console.log("loginUser Data", data.data)
      localStorage.setItem("token", data.data.loginUser.token)
      this.clearState()
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // Non optimal validation. Should not disable the button, should notify the user, but it will do for now - From Reed Barger Apollo Course, outdated.

  validateForm = () => {
    const { username, password } = this.state
    const isInvalid = !username || !password
    return isInvalid
  }

  render() {
    const { username, password } = this.state

    return (
      <Mutation
        mutation={LOGIN_USER}
        variables={{ username, password }}
        update={(() => this.props.navigate("/"))}
      >
        {(loginUser, { data, loading, error }) => {
          console.log("Mutation Data", data)
          console.log("Mutation Loading", loading)
          console.log("Mutation Error", error)
          return (
            <Layout>
              <StyledContainer>
                <StyledHeader>Login Page</StyledHeader>
                <StyledForm
                  onSubmit={event => this.handleSubmit(event, loginUser)}
                  noValidate
                >
                  <div className="form-group">
                    <RelativeIconContainer>
                      <input
                        type="text"
                        id="username"
                        // className={errors.username !== undefined ? "invalid" : null}
                        name="username"
                        placeholder="Username..."
                        value={this.state.username}
                        onChange={this.handleChange}
                        required="required"
                        autoFocus
                        autoComplete="username"
                        aria-label="Username..."
                      />
                      <StyledSVGIcon icon={["fas", "user"]} />
                    </RelativeIconContainer>
                  </div>
                  <div className="form-group">
                    <RelativeIconContainer>
                      <input
                        type="password"
                        id="password"
                        // className={errors.password !== undefined ? "invalid" : null}
                        name="password"
                        placeholder="Password..."
                        value={this.state.password}
                        onChange={this.handleChange}
                        required="required"
                        autoComplete="current-password"
                        aria-label="Password..."
                      />
                      <StyledSVGIcon icon={["fas", "lock"]} />
                    </RelativeIconContainer>
                  </div>
                  <PrimaryButton full type="submit">
                    {loading ? "Logging in..." : "Login"}
                  </PrimaryButton>
                </StyledForm>
                {/* {Object.keys(errors).length > 0 && (
            <StyledErrorContainer>
              <ul>
                {Object.values(errors).map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </StyledErrorContainer>
          )} */}
              </StyledContainer>
            </Layout>
          )
        }}
      </Mutation>
    )
  }
}

const StyledContainer = styled.section`
  min-height: calc(
    100vh - var(--navbar-height) - var(--footer-height) -
      var(--footerParagraph-text)
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 450px;
  margin: auto;
`

const StyledHeader = styled.h1`
  text-align: center;
  padding-top: 2rem;
  font-size: 2rem;
  color: var(--mainWhite);
`

const StyledForm = styled.form`
  width: 100%;
  padding: 20px 0;
  .form-group input {
    font-size: 1rem;
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    border: 3px solid transparent;
    border-radius: var(--borderRadius-1);
    outline: 0;
    line-height: 3rem;
    padding: 0 45px 0 10px;
    box-shadow: var(--boxShadow-3);
    -webkit-appearance: none;
    -webkit-box-shadow: var(--boxShadow-3);
    transition: all 0.2s ease;
  }

  .form-group .invalid {
    background-color: #fff6f6 !important;
    border-bottom: 3px solid #ff7730 !important;
  }

  .form-group input:valid {
    background-color: var(--mainWhite);
    border-bottom: 3px solid #55c57a;
  }

  .form-group input:focus:invalid {
    border-bottom: 3px solid #ff7730;
  }

  .form-group input::placeholder {
    color: #555;
  }

  .form-group,
  button {
    margin-top: 15px;
  }
`

const RelativeIconContainer = styled.div`
  position: relative;
  .svg-inline--fa.fa-w-14,
  .svg-inline--fa.fa-w-16 {
    /* width: 1.6rem; */
    width: calc(0.9rem + 1vmin);
  }
`

const StyledSVGIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-50%, 0%);
  color: rgb(139, 139, 139);
  height: 100%;
`

const StyledErrorContainer = styled.section`
  width: 100%;
  color: #9f3a38;
  box-shadow: 0 0 0 1px #e0b4b4 inset, 0 0 0 0 transparent;
  -webkit-box-shadow: 0 0 0 1px #e0b4b4 inset, 0 0 0 0 transparent;
  -webkit-appearance: none;
  border-radius: var(--borderRadius-1);
  background-color: #fff6f6;
  margin-top: 15px;
  padding: 10px 0;
`

export default Login
