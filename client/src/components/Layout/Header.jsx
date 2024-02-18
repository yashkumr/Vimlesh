import React from "react";
import { NavLink, Link } from "react-router-dom";

import toast from "react-hot-toast";
import SearchInput from "../Form/SearchInput.jsx";
import { useAuth } from "../../context/auth.jsx";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return (
    <>
      <div className="container-fluid bg-light">
        <nav className="navbar navbar-expand-lg  bg-body-tertiary">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogg;lerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <Link to="/" className="navbar-brand mr-4">
                🛒 vimlesh
              </Link>
              <ul className="navbar-nav me-auto mb-2 mr-5 mb-lg-0">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link ">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link ">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/project" className="nav-link ">
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className="nav-link ">
                    Contact
                  </NavLink>
                </li>

                {!auth?.user ? (
                  <>
                    <li className="nav-item">
                      <NavLink to="/register" className="nav-link">
                        Register
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/login" className="nav-link">
                        Login
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item dropdown">
                      <NavLink
                        className="nav-link dropdown-toggle "
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        style={{ border: "none" }}
                      >
                        {auth?.user?.name}
                      </NavLink>
                      <ul className="dropdown-menu">
                        <li>
                          <NavLink
                            to={`/dashboard/${
                              auth?.user?.role === 1 ? "admin" : "user"
                            }`}
                            className="dropdown-item"
                          >
                            Dashboard
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            onClick={handleLogout}
                            to="/login"
                            className="dropdown-item"
                          >
                            Logout
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  </>
                )}
              </ul>
              <form className="d-flex" role="search">
                <SearchInput />
                {/* <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />*/}
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
