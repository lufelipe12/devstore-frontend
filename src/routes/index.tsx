import { Switch } from "react-router-dom"
import { Route } from "react-router-dom"
import HomePage from "../pages/HomePage"

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>

      <Route exact path="/login">
        <h1>login</h1>
      </Route>

      <Route exact path="/register">
        <h1>register</h1>
      </Route>
    </Switch>
  )
}

export default Routes
