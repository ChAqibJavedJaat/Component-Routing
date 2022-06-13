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
        <input type="password" className="form-control" id="password" />
      </div>

      <Link to="/login">
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </Link>
    </form>
  );
}

export default SignUp;
