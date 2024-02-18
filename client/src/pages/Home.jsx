import React from "react";
import Layout from "../components/Layout/Layout.jsx";
import "./Home.css";

const Home = () => {
  return (
    <Layout>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner carouelHeight">
          <div className="carousel-item active">
            <img
              src="../../public/images/3.JPG"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="../../public/images/3.JPG"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="../../public/images/3.JPG"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="home-page">
        <div>
          <h1>
            Discover Our <span>Studio</span>
          </h1>
          <p>
            {" "}
            At our design studio , we are a collective of talented individuals
            ignited by our unwavering passion for transforming ideas into
            reality. With a harmonious blend of diverse backgrounds and a vast
            array of skills sets, we join forces to create compelling solutions
            for our esteemed clients.
          </p>
          <p>
            Collaboration is at the heart of what we do. Our team thrives on the
            synegry that arises when unique perspectives converge, fostering an
            environment of boundless creativity. By harnessing our collective
            expertise, we produces extraordinary results that consistently
            surpass expections.
          </p>
        </div>
        <div>
          <img src="../../public/images/5.JPG" alt="" />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
