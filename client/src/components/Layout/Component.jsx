import React from "react";
import "./Components.css";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Component = () => {
  return (
    <>
      <div className="">
        <h1 className="text-center font-bold text-3xl shadow m-5">
          Our Clients
        </h1>
        <div className="logos m-11">
          <div>
            {" "}
            <img src="../../public/images/Logo/aviation.jpeg" alt="" />
          </div>
          <div>
            {" "}
            <img src="../../public/images/Logo/deseo.png" alt="" />
          </div>
          <div>
            <img src="../../public/images/Logo/emporium.png" alt="" />{" "}
          </div>
          <div>
            {" "}
            <img src="../../public/images/Logo/shineairways.png" alt="" />
          </div>
          <div>
            <img src="../../public/images/Logo/marketporium.jpeg" alt="" />{" "}
          </div>
          <div>
            <img src="../../public/images/Logo/digitalmarket.jpg" alt="" />{" "}
          </div>
        </div>
      </div>
      {/* Social media */}

      <div className="m-5">
        <h1 className="text-3xl font-bold text-center text-gray m-3 ">
          Follow Us On Social Media
        </h1>
        <div className="social-media-icons ">
          <div>
            <FaFacebook />
          </div>
          <div>
            {" "}
            <FaGithub />{" "}
          </div>
          <div>
            {" "}
            <FaLinkedin />{" "}
          </div>
          <div>
            {" "}
            <FaInstagramSquare />{" "}
          </div>
          <div>
            {" "}
            <SiLeetcode />{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Component;
