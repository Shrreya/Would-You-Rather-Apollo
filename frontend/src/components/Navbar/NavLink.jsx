import React from "react"
import { Link } from "@reach/router"

const NavLink = props => {
  return (
    <Link
      {...props}
      getProps={({ isCurrent }) => {
        return {
          style: {
            color: isCurrent ? "rgb(225, 120, 255)" : "#fff"
          }
        }
      }}
    />
  )
}

export default NavLink
