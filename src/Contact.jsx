import React from "react";
import "./Contact.css";

function ContactPage() {
  return (
    <div className="container">
      <div className="card">
        <div className="form">
          <div className="left-side">
            <div className="top">
              <h2>Contact Information</h2>
              <p>
                Fill up the form and our Team will get back to you within 24
                hours.
              </p>
            </div>
            <div className="medium">
              <i className="fa fa-phone"></i> <p>+0123 456 78910</p>
              <i className="fa fa-envelope-o"></i> <p>Abc@abc.com</p>
              <i className="fa fa-map-marker"></i>
              <p>Street Address</p>{" "}
            </div>{" "}
            <div className="last">
              <span>
                <i className="fa fa-facebook-f"></i>
              </span>
              <span>
                {" "}
                <i className="fa fa-twitter"></i>
              </span>
              <span>
                <i className="fa fa-instagram"></i>
              </span>
              <span>
                <i className="fa fa-linkedin"></i>
              </span>
            </div>{" "}
          </div>{" "}
          <div className="right-side">
            <div className="card-details">
              <div className="input-group">
                <div className="input">
                  <input type="text" required="required" />
                  <span>First Name</span>{" "}
                </div>{" "}
                <div className="input">
                  <input type="text" required="required" />
                  <span>Last Name</span>{" "}
                </div>{" "}
              </div>
              <div className="input-group">
                <div className="input">
                  <input type="text" required="required" />
                  <span className="text-end" placeholder="@gmail.com">
                    E-mail
                  </span>{" "}
                </div>
                <div className="input">
                  <input type="text" required="required" />
                  <span>Phone no.</span>{" "}
                </div>{" "}
              </div>{" "}
            </div>
            <div className="below-content">
              {" "}
              <h6>What was the content you need?</h6>
              <div className="centered">
                {" "}
                <div>
                  {" "}
                  <input type="radio" name="rr" id="r1" />
                  <label htmlFor="r1">HTML</label>{" "}
                </div>{" "}
                <div>
                  <input type="radio" name="rr" id="r2" />
                  <label htmlFor="r2">CSS</label>{" "}
                </div>{" "}
                <div>
                  <input type="radio" name="rr" id="r3" />
                  <label htmlFor="r3">Javascript</label>{" "}
                </div>
                <div>
                  {" "}
                  <input type="radio" name="rr" id="r4" />
                  <label htmlFor="r4">Jquery</label>{" "}
                </div>{" "}
              </div>
              <div className="text-area">
                {" "}
                <textarea required="required"></textarea>
                <span>Message</span>{" "}
              </div>{" "}
              <div className="button">
                <button className="btn btn-primary">Send Message</button>
              </div>
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
}

export default ContactPage;
