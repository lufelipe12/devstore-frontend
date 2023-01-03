import { Switch } from "react-router-dom"
import { Route } from "react-router-dom"

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <h1>landing page</h1>
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
