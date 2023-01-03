import { Switch } from "react-router-dom"
import { Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>

      <Route exact path="/login">
        <LoginPage />
      </Route>

      <Route exact path="/register">
        <RegisterPage />
      </Route>
    </Switch>
  )
}

export default Routes
