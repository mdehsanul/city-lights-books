import React from "react";
import "./Navbar.css";
import { Link, useParams } from "react-router-dom";

const Navbar = () => {
  const { bookId } = useParams();
  return (
    <div className="navbar">
      <nav className="navbar navbar-light fixed-top pt-4 pb-3 navbarStyle">
        <div className="container">
          <h1 className="navbar-brand">City Lights Books</h1>
          <div className="navbarListItems">
            <Link to="/home" className="navBar">
              Home
            </Link>
            <Link to="/orderDetail" className="navBar">
              Orders
            </Link>
            <Link to="/manageBook" className="navBar">
              Admin
            </Link>
            <Link to="/" className="navBar">
              Deals
            </Link>
            <Link to="/login">
              <button className="btn btn btn-outline-dark">Login</button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
