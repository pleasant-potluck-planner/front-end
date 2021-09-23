import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const RegisterForm = () => {
  const { push } = useHistory();

  const [credentials, setCredentials] = useState({
    user_id: Date.now(),
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
      .post(
        "https://potluck-planner-5.herokuapp.com/api/auth/register",
        credentials
      )
      .then((res) => {
        console.log(res);
        // localStorage.setItem('token', res.data)
        push("/sign-in");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="formCenter">
      <form onSubmit={handleSubmit} className="formFields">
        <div className="formField">
          <label className="formFieldLabel" htmlFor="name">
            Username
          </label>
          <input
            type="text"
            id="name"
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
          <label className="formFieldLabel" htmlFor="email">
            E-Mail Address
          </label>
          <input
            type="email"
            id="email"
            className="formFieldInput"
            placeholder="Enter your email"
            name="email"
            value={credentials.email}
          />
        </div>

        <div className="formField">
          <button className="formFieldButton">Sign Up</button>{" "}
          <Link to="/sign-in" className="formFieldLink">
            I'm already member
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
