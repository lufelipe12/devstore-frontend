import { Switch } from "react-router-dom"
import { Route } from "react-router-dom"
import Header from "../components/Header"

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Header />
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
