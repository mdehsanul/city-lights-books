import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThLarge,
  faPlus,
  faPen,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import "./AdminPanel.css";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

const Admin = () => {
  return (
    <div>
      <div className="sidenav">
        <h2>City Lights Books</h2>
        <div className="sideNavItem">
          <Link to="/manageBook" className="link">
            <FontAwesomeIcon icon={faThLarge} /> Manage books
          </Link>
          <Link to="/addBook" className="link">
            <FontAwesomeIcon icon={faPlus} /> Add Book
          </Link>
          <Link to="/editBook" className="link">
            <FontAwesomeIcon icon={faPen} /> Edit book
          </Link>
          <Link to="" className="link">
            <FontAwesomeIcon icon={faHome} /> Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Admin;
