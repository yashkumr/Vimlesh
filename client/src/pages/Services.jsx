import React from "react";

import { NavLink } from "react-router-dom";
import "./Services.css";
import Layout from "../components/Layout/Layout.jsx";

const Services = () => {
  return (
    <>
      <Layout>
        <div className="services">
          <div className="background">
            <div className="img-services">
              <p>
                <span className="text-3xl">Projects </span> |
                <span>
                  {" "}
                  <NavLink to="/"> Home</NavLink>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="" style={{ width: "90%", margin: "auto" }}>
          {/* projects */}
          {/* ecommerce */}
          <div>
            <h1 className="text-center text-3xl font-bold mt-5 mb-3">
              PROJECTS
            </h1>
            <span className="text-start text-xl font-bold">
              Ecommerce App :-React.js and Express JS, Node.js, MongoDB
            </span>
            <p>
              Developed an Ecommerce App in Which User can Login & signup and
              with user can Add to cart their products and User can easily find
              their similar products.
            </p>
            <br />
            <span className="font-bold">Admin Functionality: </span>
            <p>
              Admin can Manage their products easily & add their products as
              well as Manage the categories with proper functionality.
            </p>
            <br />
            <span className="font-bold">Payment Gateway:- </span>
            <p>
              User can Payment with Razor pay payment Gateway & he can look &
              track their product easily, like processing pending or success or
              fails
            </p>
          </div>
          {/* chatapp */}
          <div>
            <h1 className="text-center font-bold text-2xl mt-3">CHAT-APP</h1>
            <span className="font-bold">Admin Functionality: </span>
            <p>
              Developed a real-time chat application facilitating bi-directional
              communication between web clients and servers using Web Sockets
              and Express JS.
            </p>
            <br />
            <span className="font-bold">Production</span>
            <p>
              Implemented robust features ensuring seamless interaction and
              instant messaging capabilities for users.
            </p>
          </div>
          {/* Live Projects */}
          <div>
            <h1 className="text-center text-2xl font-bold mt-5">
              LIVE PROJECTS
            </h1>
            <span className="text-start text-xl font-bold ">
              <NavLink to=" https://deseo.in/"> https://deseo.in/</NavLink>
            </span>
            <p>
              Developed an Ecommerce App in Which User can Login & signup and
              with user can Add to cart their products and User can easily find
              their similar products.
            </p>
            <br />
            <span className="font-bold">Roles and Responsibilities:</span>
            <p className="mt-2">
              :-Played a crucial role in the development team, contributing to
              the creation of innovative software solutions as a Full Stack
              Developer.
            </p>

            <p className="mt-2">
              :- Collaborated closely with product managers to understand the
              requirements and implemented features that aligned with the vision
              of the company.
            </p>
            <p className="mt-2">
              :-Demonstrated expertise in utilizing REST APIs to design and
              develop user experiences and interfaces for the Deseo Platform as
              a Service (PaaS) provider.
            </p>
            <p className="mt-2">
              :- Actively participated in the full software development life
              cycle, from concept to delivery, ensuring high-quality code and
              optimal performance.
            </p>
            <p className="mt-2">
              :- Engaged in troubleshooting and problem resolution, ensuring the
              seamless operation of the digital ecosystems established for
              brokers, advisors, and distributors.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Services;
