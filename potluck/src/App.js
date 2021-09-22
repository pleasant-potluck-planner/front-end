
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import RegisterForm from "./components/Register";
import LoginForm from "./components/Login";
import { loginImg } from './components/Loginimg' 

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="appAside">
            <div className="headerAside">
            <img src= {loginImg}></img>
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
                to="/"
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
                to="/"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Register
              </NavLink>
            </div>

            <Route exact path="/" component={RegisterForm} />
            <Route path="/sign-in" component={LoginForm} />
          </div>
        </div>
      </Router>
    );
  }

}

export default App;
