import { Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Events from "./pages/Events";
import Home from "./pages/Home";
import SingleEvent from "./pages/SingleEvent";
//import { useUserContext } from "./contexts/UserProvider";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/events">
        <Events />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/singleevent">
        <SingleEvent />
      </Route>
    </Switch>
  );
};

export default Routes;
