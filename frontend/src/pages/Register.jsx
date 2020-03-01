import React, { Component } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Mutation } from "react-apollo"

import { REGISTER_USER } from "../queries/index"
import PrimaryButton from "../components/UI Components/PrimaryButton"
import Layout from "../components/Layout/Layout"

const initialState = {
  errors: {},
  username: "",
  password: "",
  email: "",
  // confirmPassword: "",
  firstName: "",
  lastName: ""
}

class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ...initialState
    }
  }

  clearState = () => {
    this.setState({ ...initialState })
  }

  // const [addUser, { loading }] = Mutation(REGISTER_USER, {
  //   variables: values,
  //   onError(err) {
  //     console.log("ERROR", err)
  //     if (err.graphQLErrors[0].extensions.error) {
  //       setErrors(err.graphQLErrors[0].extensions.exception.error)
  //     } else if (err.graphQLErrors[0].extensions.errors) {
  //       setErrors(err.graphQLErrors[0].extensions.exception.errors)
  //     } else {
  //       console.log("err - Something else happened", err.graphQLErrors[0])
  //     }
  //     console.log("err.graphQLErrors[0]", err.graphQLErrors[0])
  //   },
  //   update(_, result) {
  //     console.log("update result register", result)
  //     context.login(result.data.register)
  //     props.navigate("/")
  //   },
  //   onCompleted: () => {
  //     setErrors({})
  //     // window.location.href = "/register/success"
  //   }
  // })

  handleSubmit = (event, registerUser) => {
    event.preventDefault()
    registerUser().then(data => {
      console.log("registerUser Data", data.data)
      localStorage.setItem("token", data.data.addUser.token)
      this.clearState()
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // Non optimal validation. Should not disable the button, should notify the user, but it will do for now

  validateForm = () => {
    const { username, password, email, firstName, lastName } = this.state
    const isInvalid =
      !username || !password || !email || !firstName || !lastName
    return isInvalid
  }

  render() {
    const { username, password, email, firstName, lastName } = this.state

    return (
      <Mutation
        mutation={REGISTER_USER}
        variables={{ username, password, email, firstName, lastName }}
        update={(() => this.props.navigate("/"))}
      >
        {(registerUser, { data, loading, error }) => {
          console.log("Mutation Data", data)
          console.log("Mutation Loading", loading)
          console.log("Mutation Error", error)
          return (
            <Layout>
              <StyledContainer>
                <StyledHeader>Register Page</StyledHeader>
                <StyledForm
                  onSubmit={event => this.handleSubmit(event, registerUser)}
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
                        autoComplete="new-password"
                        aria-label="Password..."
                      />
                      <StyledSVGIcon icon={["fas", "lock"]} />
                    </RelativeIconContainer>
                  </div>
                  <div className="form-group">
                    <RelativeIconContainer>
                      <input
                        type="email"
                        // className={errors.email !== undefined ? "invalid" : null}
                        id="email"
                        name="email"
                        placeholder="Email address..."
                        value={this.state.email}
                        onChange={this.handleChange}
                        required="required"
                        autoComplete="email"
                        aria-label="Email address..."
                      />
                      <StyledSVGIcon icon={["fas", "envelope"]} />
                    </RelativeIconContainer>
                  </div>
                  <div className="form-group">
                    <RelativeIconContainer>
                      <input
                        type="text"
                        // className={errors.email !== undefined ? "invalid" : null}
                        id="firstName"
                        name="firstName"
                        placeholder="First Name..."
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        required="required"
                        // autoComplete="email"
                        aria-label="First Name..."
                      />
                      <StyledSVGIcon icon={["fas", "envelope"]} />
                    </RelativeIconContainer>
                  </div>
                  <div className="form-group">
                    <RelativeIconContainer>
                      <input
                        type="text"
                        // className={errors.email !== undefined ? "invalid" : null}
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name..."
                        value={this.state.lastName}
                        onChange={this.handleChange}
                        required="required"
                        // autoComplete="email"
                        aria-label="Last Name..."
                      />
                      <StyledSVGIcon icon={["fas", "envelope"]} />
                    </RelativeIconContainer>
                  </div>
                  <PrimaryButton
                    full
                    type="submit"
                    disabled={loading || this.validateForm()}
                  >
                    {loading ? "Registering..." : "Register"}
                  </PrimaryButton>
                </StyledForm>
                {/* {Object.keys(error).length > 0 && (
                  <StyledErrorContainer>
                    <ul>
                      {Object.values(error).map(item => (
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
    -webkit-box-shadow: var(--boxShadow-3);
    -webkit-appearance: none;
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

export default Register
