import React from "react";
import "./Home.css";

function HomePage() {
  return (
    <form className="row">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h2 className="form-title">
              Find Your <strong>Dream</strong>
            </h2>
          </div>
          <div className="col-md-9">
            <div className="input-group">
              <input type="search" className="form-control" />
              <span className="input-group-addon">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-dark btn-lg"
                />
              </span>
            </div>
            <h3>Hello User!</h3>
          </div>
        </div>
      </div>
    </form>
  );
}

export default HomePage;
