import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/profile">
          <img
            src="http://www.epicareathome.com/wp-content/uploads/2021/10/icon-patients.png"
            width="30"
            height="30"
            alt=""
          />
          <p style={{ display: 'inline', paddingLeft: '10px' }}>M. Achour</p>
        </NavLink>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link " to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/movies">
                Movies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/posts">
                Posts
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin">
                Admin
              </NavLink>
            </li>
          </ul>
          <form className="d-lg-flex">
            <li className="btn btn-outline-success me-2">
              <NavLink className="nav-link text-nowrap" to="/login">
                Log in
              </NavLink>
            </li>
            <li className="btn btn-success fw-bold">
              <NavLink className="nav-link text-nowrap" to="/register">
                Register
              </NavLink>
            </li>
          </form>
        </div>
      </div>
    </nav>
  );
};
