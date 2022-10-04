import React from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import "./index.css";

const Header = () => {
  const { pathname } = useLocation();

  const navigate = useNavigate();
  if (pathname === "/") {
    return <></>;
  }
  return (
    <div className="Header">
      <div className="Acadmey_name">
        <p>AbucasAcadmey</p>
      </div>
      <div className="names_container">
        <NavLink
          to="/academy"
          className={({ isActive }) => (isActive ? "active names" : "names")}
        >
          Acadmey
        </NavLink>
        <NavLink
          to="courses"
          className={({ isActive }) => (isActive ? "active names" : "names")}
        >
          Courses
        </NavLink>
        <NavLink
          to="students"
          className={({ isActive }) => (isActive ? "active names" : "names")}
        >
          Student
        </NavLink>
      </div>
      <div className="logout_container">
        <p className="logout" onClick={() => navigate("/")}>
          Logout
        </p>
      </div>
    </div>
  );
};

export default Header;
