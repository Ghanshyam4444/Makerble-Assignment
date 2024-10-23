import { NavLink } from "react-bootstrap";
import "./navbar.css";
export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="ms-4 p-font">
            <NavLink
              className="navbar-brand nav_link"
              style={{ text: "white", listStyle: "none" }}
              to="/"
            >
              Home
            </NavLink>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </>
  );
};
