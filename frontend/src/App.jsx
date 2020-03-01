import React, { Component } from "react"
import { Router } from "@reach/router"

import GlobalStyle from "./styles/GlobalStyle"
import { AuthProvider } from "./context/Auth"
import AuthRoute from "./utilities/AuthRoute"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Register from "./pages/Register"
import Login from "./pages/Login"
// import SingleUser from "./Pages/SingleUser"

import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faCheckSquare,
  faCheckCircle,
  faUser,
  faEnvelope,
  faPencilAlt,
  faLock,
  faEdit,
  faHome,
  faAngleUp,
  faAngleDown
} from "@fortawesome/free-solid-svg-icons"

library.add(
  faCheckSquare,
  faCheckCircle,
  faUser,
  faEnvelope,
  faPencilAlt,
  faLock,
  faEdit,
  faHome,
  faAngleUp,
  faAngleDown
)

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Router>
          <Home path="/" />
          <NotFound default />
          <AuthRoute path="/login" component={Login} />
          <AuthRoute path="/register" component={Register} />
          {/* <SingleUser path="/users/:userId" /> */}
        </Router>
      </React.Fragment>
    )
  }
}

export default App
