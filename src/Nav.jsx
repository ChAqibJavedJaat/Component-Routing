import React from "react";

function Nav() {
  return (
    <nav className=" container-fluid navbar navbar-dark bg-dark">
      <div>
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <a className="navbar-brand" href="/contact">
          Contact{" "}
        </a>
      </div>
      <div>
        <a className="navbar-brand btn btn-success " href="login">
          Login
        </a>
        <a className="navbar-brand btn btn-danger" href="/sign-up">
          Sign Up
        </a>
      </div>
    </nav>
  );
}

export default Nav;
