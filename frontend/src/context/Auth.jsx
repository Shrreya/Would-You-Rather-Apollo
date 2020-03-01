// Create context to use JWT within the application, and persist it with localStorage upon 
// refresh
// We can with this logic also login and logout succesfully which we could not before as nothing happened upon logging in.

// not in use yet

import React, { useReducer, createContext } from "react"
import jwtDecode from "jwt-decode"

const initialState = {
  user: null
}

if (localStorage.getItem("jwtToken")) {
  const decodedToken = jwtDecode(localStorage.getItem("jwtToken"))
  console.log("decodedToken", decodedToken)

  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem("jwtToken")
  } else {
    initialState.user = decodedToken
  }
}

const AuthContext = createContext({
  user: null,
  login: userData => {},
  logout: () => {}
})

function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload
      }
    case "LOGOUT":
      return {
        ...state,
        user: null
      }
    default:
      return state
  }
}

function AuthProvider(props) {
  const [state, dispatch] = useReducer(authReducer, initialState)

  function login(userData) {
    localStorage.setItem("jwtToken", userData.token)
    dispatch({
      type: "LOGIN",
      payload: userData
    })
  }

  function logout() {
    localStorage.removeItem("jwtToken")
    dispatch({
      type: "LOGOUT"
    })
  }

  return (
    <AuthContext.Provider
      value={{ user: state.user, login, logout }}
      {...props}
    />
  )
}

export { AuthContext, AuthProvider }
