import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  // Retrieve user from localStorage or sessionStorage
  const user = JSON.parse(localStorage.getItem('user')) || JSON.parse(sessionStorage.getItem('user'));

  // Determine if the user is logged in and if they are an admin
  const isLoggedIn = Boolean(user);
  const isAdmin = isLoggedIn && user.role === 'admin'; // Adjust this condition based on how your user data indicates admin status

  return (
    <div className="row mt-2">
      <div className="col-sm-12">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"><img src="images/images.png" alt="" height="150" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                {!isLoggedIn && (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/signup">Sign Up</Link>
                    </li>
                  </>
                )}
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About Us</Link>
                </li>
                {/* Conditionally render "Add To Cart" link */}
                {!isAdmin && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/addtocart">Add To Cart</Link>
                  </li>
                )}
                {isLoggedIn && !isAdmin && (
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      More
                    </a>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="/adminlogin">Admin</Link></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                )}
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
