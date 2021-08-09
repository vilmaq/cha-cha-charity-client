import { Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Events from "./pages/Events";
import Homepage from "./pages/Homepage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/events">
        <Events />
      </Route>
      <Route exact path="/">
        <Homepage />
      </Route>
    </Switch>
  );
};

export default Routes;
