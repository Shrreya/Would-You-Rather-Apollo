import React from "react"
import { Link } from "@reach/router"

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
