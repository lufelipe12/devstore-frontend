import { Switch } from "react-router-dom"
import { Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"

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
        <h1>register</h1>
      </Route>
    </Switch>
  )
}

export default Routes
