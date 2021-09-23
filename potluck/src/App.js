import "./App.css";
// import AddEvent from "./Components/CreateEvent";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Redirect,
} from "react-router-dom";
import MyPotlucks from "./components/MyPotlucks";
import OrganizerEventUpdate from "./components/OrganizerEventUpdate";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/Login";
import { loginImg } from "./components/Loginimg";
import axios from "axios";
import "./App.css";

function App() {
  const [potlucks, setPotlucks] = useState([]);

  useEffect(() => {
    axios
      .get("https://potluck-planner-5.herokuapp.com/api/potlucks/1")
      .then((res) => {
        console.log(res);
        setPotlucks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <div className="appAside">
          <div className="headerAside">
            <img src={loginImg} alt="potluck"></img>
          </div>
        </div>
        <div className="appForm">
          <div className="pageSwitcher">
            <NavLink
              to="/sign-in"
              activeClassName="pageSwitcherItem-active"
              className="pageSwitcherItem"
            >
              Login
            </NavLink>
            <NavLink
              exact
              to="/register"
              activeClassName="pageSwitcherItem-active"
              className="pageSwitcherItem"
            >
              Register
            </NavLink>
          </div>

          <div className="formTitle">
            <NavLink
              to="/sign-in"
              activeClassName="formTitleLink-active"
              className="formTitleLink"
            >
              Login
            </NavLink>{" "}
            or{" "}
            <NavLink
              exact
              to="/register"
              activeClassName="formTitleLink-active"
              className="formTitleLink"
            >
              Register
            </NavLink>
          </div>

          <Switch>
            <Route
              path="/potlucks/orgupdate/:id"
              render={(props) => (
                <OrganizerEventUpdate
                  {...props}
                  potlucks={potlucks}
                  setPotlucks={setPotlucks}
                />
              )}
            />
            <Route
              path="/potlucks"
              render={(props) => (
                <MyPotlucks
                  {...props}
                  potlucks={potlucks}
                  setPotlucks={setPotlucks}
                />
              )}
            />

            <Route path="/register" component={RegisterForm} />
            <Route path="/sign-in" component={LoginForm} />
            <Route path="/">
              <Redirect to="/sign-in" />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
