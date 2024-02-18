import React from "react";

import "./Contact.css";
import { NavLink } from "react-router-dom";
import Layout from "../components/Layout/Layout.jsx";

const Contact = () => {
  return (
    <>
      <Layout>
        <div className="contact">
          <div className="background">
            <div className="img-contact">
              <p>
                <span className="text-3xl">Contact Us </span> |
                <span>
                  {" "}
                  <NavLink to="/"> Home</NavLink>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <form className="container m-5 ">
            <div className="mb-3">
              <label htmlFor="exampleInputname" className="form-label">
                Name
              </label>
              <input
                type=" name"
                className="form-control"
                id="exampleInputname"
                aria-describedby="nameHelp"
                placeholder="Name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Email"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea"
                defaultValue={""}
              />
              <label htmlFor="floatingTextarea">Queries...</label>
            </div>

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Contact;
