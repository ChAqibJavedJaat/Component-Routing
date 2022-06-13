import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <form className="container-fluid">
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control text-end"
          id="email"
          aria-describedby="emailHelp"
          placeholder="@gmail.com"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control text-end"
          id="password"
          placeholder="must contain at least '8' characters"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="c-password" className="form-label">
          Confirm Password
        </label>
        <input
          type="c-password"
          className="form-control text-end"
          id="c-password"
          placeholder="must be same as above"
        />
      </div>
      <Link to="/sign-up">
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </Link>
    </form>
  );
}

export default SignUp;
