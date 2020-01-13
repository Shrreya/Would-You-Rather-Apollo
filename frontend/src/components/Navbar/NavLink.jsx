import React from "react"
import { Link } from "@reach/router"

// const PartialNavLink = props => (
//   <Link getProps={isPartiallyActive} {...props}>
//     {props.children}
//   </Link>
// )

const NavLink = props => (
  <Link
    getProps={({ isCurrent }) => {
      return {
        style: {
          color: isCurrent ? "rgb(225, 120, 255)" : "#fff"
        }
      }
    }}
    {...props}
  />
)

export default NavLink
