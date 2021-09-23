import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const { push } = useHistory();

  const [credentials, setCredentials] = useState({
    user_name: "",
    user_password: "",
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://potluck-planner-5.herokuapp.com/api/login", credentials)
      .then((res) => {
        console.log(res);
        // localStorage.setItem('token', res.data)
        push("/potlucks");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="formCenter">
      <form className="formFields" onSubmit={handleSubmit}>
        <div className="formField">
          <label className="formFieldLabel" htmlFor="email">
            Username
          </label>
          <input
            type="text"
            id="email"
            className="formFieldInput"
            placeholder="Enter username"
            name="user_name"
            value={credentials.user_name}
            onChange={handleChange}
          />
        </div>

        <div className="formField">
          <label className="formFieldLabel" htmlFor="password">
            Password
          </label>
          <input
            type="text"
            id="password"
            className="formFieldInput"
            placeholder="Enter your password"
            name="user_password"
            value={credentials.user_password}
            onChange={handleChange}
          />
        </div>

        <div className="formField">
          <button className="formFieldButton">Sign In</button>{" "}
          <Link to="/register" className="formFieldLink">
            Create an account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
