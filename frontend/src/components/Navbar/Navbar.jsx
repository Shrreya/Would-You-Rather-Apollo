import React, { Component } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// import { AuthContext } from "../../Context/Auth"
import NavLink from "./NavLink"
import NavigationLinks from "../../constants/NavigationLinks"
import ProfileLinks from "../../constants/ProfileLinks"

class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      profileOpen: false,
      isLoggedIn: false  
    }
  }

  toggleProfile = () => {
    const currentState = this.state.profileOpen
    this.setState({ profileOpen: !currentState })
  }

  logoutHandler = () => {
    // context.logout()
    this.toggleProfile()
  }

  // const context = useContext(AuthContext)
  // console.log("Navbar context", context)

  NavbarItems = () => {
    if (this.state.isLoggedIn) {
      return (
        <StyledNavbar>
          <StyledNavUL>
            {NavigationLinks.map(link => {
              return (
                <li key={link.id}>
                  <StyledNavLink to={link.path}>{link.text}</StyledNavLink>
                </li>
              )
            })}
          </StyledNavUL>
          {this.UserProfile()}
        </StyledNavbar>
      )
    } else {
      return <StyledNavbarFlexEnd>{this.UserProfile()}</StyledNavbarFlexEnd>
    }
  }

  UserProfile = () => {
    if (this.state.isLoggedIn) {
      return (
        <React.Fragment>
          <StyledProfile
            onClick={this.toggleProfile}
            aria-checked={this.state.profileOpen}
            aria-label="Profile"
          >
            <figure>
              <StyledSVGIcon icon={["fas", "user"]} />
            </figure>
          </StyledProfile>
          <StyledProfileUL
            className={this.state.profileOpen ? "open" : "closed"}
          >
            <li>Username</li>
            <li>
              <StyledNavLink to="/" onClick={this.logoutHandler}>
                Logout
              </StyledNavLink>
            </li>
          </StyledProfileUL>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <StyledProfile
            onClick={this.toggleProfile}
            aria-checked={this.state.profileOpen}
            aria-label="Profile"
          >
            <figure>
              <StyledSVGIcon icon={["fas", "user"]} />
            </figure>
          </StyledProfile>
          <StyledProfileUL
            className={this.state.profileOpen ? "open" : "closed"}
          >
            {ProfileLinks.map(item => {
              return (
                <li key={item.id}>
                  <StyledNavLink to={item.path}>{item.text}</StyledNavLink>
                </li>
              )
            })}
          </StyledProfileUL>
        </React.Fragment>
      )
    }
  }

  render() {
    return this.NavbarItems()
  }
}

const StyledNavbar = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(66, 59, 114);
  color: var(--mainWhite);
  z-index: 1;
  min-height: var(--navbar-height);
  box-shadow: var(--boxShadow-1);
  ul {
    padding: 0;
    list-style: none;
  }
  a {
    font-size: calc(0.7rem + 1vmin);
  }
  li {
    padding: 0 0.5rem;
  }
`

const StyledNavbarFlexEnd = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: rgb(66, 59, 114);
  color: var(--mainWhite);
  z-index: 1;
  min-height: var(--navbar-height);
  box-shadow: var(--boxShadow-1);
  ul {
    padding: 0;
    list-style: none;
  }
  a {
    font-size: calc(0.7rem + 1vmin);
  }
  li {
    padding: 0 0.5rem;
  }
`

const StyledNavUL = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  width: auto;
  height: var(--navbar-checkbox);
  li {
    height: 100%;
    /* width: 100%; */
    width: auto;

    &:hover {
      background-color: var(--mainBlack);
    }
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1rem;
  outline: 0;
`

const StyledProfile = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: var(--navbar-checkbox);
  cursor: pointer;
`

const StyledProfileUL = styled.ul`
  li {
    padding: 1rem;
  }
  &.closed {
    display: none;
  }

  &.open {
    position: absolute;
    right: 0;
    top: 100%;
    background-color: inherit;
    box-shadow: 4px 6px 8px 0px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 4px 6px 8px 0px rgba(0, 0, 0, 0.1);
    -webkit-appearance: none;
    border-bottom-left-radius: 5px;
  }
`

const StyledSVGIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
`

export default Navbar
