import React from "react";

import "./About.css";
import { NavLink } from "react-router-dom";
import Layout from "../components/Layout/Layout.jsx";

const About = () => {
  return (
    <>
      <Layout>
        <div className="about">
          <div className="background">
            <div className="img-about">
              <p>
                <span className="text-3xl">About Us </span> |
                <span>
                  {" "}
                  <NavLink to="/"> Home</NavLink>
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* about details */}
        <div className="about-detail">
          <div>
            <h1 className="text-2xl text-center mt-4">SEO In 2024:</h1> <br />
            <h2 className="text-xl text-center">
              {" "}
              Top Priorities & Challenges SEO Friendly
            </h2>
            <br />
            <p>
              {" "}
              Join with us we explore exclusive survey data from today'stop seo
              professionals and digital marketers to inform your strategy this
              year , You will know how to get new advantage with new tools. so
              if you want to navigate with new technologies then you should call
              on me for better development. thanks...
            </p>
          </div>
          <div>
            <img
              src="	https://www.searchenginejournal.com/wp-content/uploads/2024/01/new-banner-1x-65b287cf6a195-sej.webp"
              alt=""
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
