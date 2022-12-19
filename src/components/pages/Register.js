import React, { useState } from "react";
import "./Register.css";
import Validation from './Validation'

const Register = () => {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    password: "",
  });

const [errors, setErrors] = useState({})

  const handleChange = (event) =>{
    setValues({
      ...values,
      [event.target.name]:event.target.value,
    })
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values))
  };
  return (
    <div className="containerLogin">
      <form>
        <h1 className="heading-sign">Sign Up Form</h1>
        <div className="ui devider"></div>
        <div className="ui form">
          <div className="field">
            <label htmlFor="Full Name"></label>
            <input
              type="text"
              name="fullname"
              placeholder="Fullname"
              value={values.fullname}
              onChange={handleChange}
            />
            {errors.fullname && <p className="error"> {errors.fullname} </p>}
          </div>
          <div className="field">
            <label htmlFor="Email"></label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error"> {errors.email} </p>}
          </div>
          <div className="field">
            <label htmlFor="Password"></label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error"> {errors.password} </p>}
          </div>

          <div className="ui checkbox">
            <input type="checkbox" name="example" />
            <label>Remember me</label>
          </div>

          <div className="loginButton-2">
            <button
              className="fluid ui red basic button"
              onClick={handleFormSubmit}
            >
              Sign Up
            </button>
          </div>
          <div className="or-para">or</div>
          <div className="twowayLogin">
            <button className="ui facebook button" onClick={handleFormSubmit}>
              <i class="facebook icon"></i>
              Facebook
            </button>
            <button className="ui google button" onClick={handleFormSubmit}>
              <i class="google icon"></i>
              Google
            </button>
          </div>
          <div className="terms">
            <p>
              By signing up you accept the <a href=""> Terms of Service </a>
              and <a href="">Privacy Policy</a>
            </p>
          </div>
          <div className="terms">
            <p>
              Already have an account? <a href="/login"> Login </a>
              or <a href="">Create an account with phone number</a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
