import React, { useState } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// import { AuthContext } from "../../Context/Auth"
import NavLink from "./NavLink"
import NavigationLinks from "../../constants/NavigationLinks"
import ProfileLinks from "../../constants/ProfileLinks"

const Navbar = () => {
  const [profileOpen, setProfileOpen] = useState(false)

  const toggleProfile = () => {
    setProfileOpen(profileOpen => !profileOpen)
  }

  const logoutHandler = () => {
    // context.logout()
    toggleProfile()
  }

  // const context = useContext(AuthContext)
  // console.log("Navbar context", context)

  const loggedInUser =
    1 + 1 === 2 ? (
      <React.Fragment>
        <StyledProfile
          onClick={toggleProfile}
          aria-checked={profileOpen}
          aria-label="Profile"
        >
          <figure>
            <StyledSVGIcon icon={["fas", "user"]} />
          </figure>
        </StyledProfile>
        <StyledProfileUL className={profileOpen ? "open" : "closed"}>
          <li>Username</li>
          <li>
            <StyledNavLink to="/" onClick={logoutHandler}>
              Logout
            </StyledNavLink>
          </li>
        </StyledProfileUL>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <StyledProfile
          onClick={toggleProfile}
          aria-checked={profileOpen}
          aria-label="Profile"
        >
          <figure>
            <StyledSVGIcon icon={["fas", "user"]} />
          </figure>
        </StyledProfile>
        <StyledProfileUL className={profileOpen ? "open" : "closed"}>
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

  return (
    <StyledNavbar>
      <StyledNavUL>
        {NavigationLinks.map((link, index) => {
          return (
            <li key={index}>
              <StyledNavLink to={link.path}>{link.text}</StyledNavLink>
            </li>
          )
        })}
      </StyledNavUL>
      {loggedInUser}
    </StyledNavbar>
  )
}

const StyledNavbar = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(66, 59, 114);
  color: #fff;
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
  width: 100%;
  height: 60px;
  li {
    /* min-width: 20vw; */
    height: 100%;
    &:hover {
      background-color: #333;
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
  width: 60px;
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
