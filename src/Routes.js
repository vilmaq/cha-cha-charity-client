import { Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Events from "./pages/Events";
import Home from "./pages/Home";
import { useUserContext } from "./contexts/UserProvider";
import NewEvent from "./pages/NewEvent";

const Routes = () => {
  const { state, dispatch } = useUserContext();

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
      <Route exact path="/newEvent">
        <NewEvent />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
