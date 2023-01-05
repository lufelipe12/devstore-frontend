import { Redirect, Switch } from "react-router-dom"
import { Route } from "react-router-dom"

import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"
import { useAuth } from "../providers/Auth"

const Routes = () => {
  const { isLoggedIn } = useAuth()

  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>

      <Route exact path="/login">
        {isLoggedIn ? <Redirect to="/" /> : <LoginPage />}
      </Route>

      <Route exact path="/register">
        {isLoggedIn ? <Redirect to="/" /> : <RegisterPage />}
      </Route>
    </Switch>
  )
}

export default Routes
