// Check if we are logged in, and if so, redirect us to the home page as we don't want to be able to register while logged in

// Not in use yet

import React, { useContext } from "react"
import { Redirect } from "@reach/router"

import { AuthContext } from "../context/Auth"

const AuthRoute = ({ component: Component, ...rest }) => {
  const context = useContext(AuthContext)
  if (context.user) {
    return <Redirect to="/" noThrow />
  } else {
    return <Component {...rest} />
  } 
}
export default AuthRoute
